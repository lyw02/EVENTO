import "server-only";

import { unstable_cache } from "next/cache";
import prisma from "./db";
import { capitalize } from "./utils";
import { notFound } from "next/navigation";

export const getEvents = unstable_cache(async (city: string, page = 1) => {
  const pageSize = 6;
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "desc",
    },
    take: pageSize,
    skip: (page - 1) * pageSize,
  });

  let totalCount;

  if (city === "all") {
    totalCount = await prisma.eventoEvent.count();
  } else {
    totalCount = await prisma.eventoEvent.count({
      where: {
        city: capitalize(city),
      },
    });
  }

  return { events, totalCount };
});

export const getEvent = unstable_cache(async (slug: string) => {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
});
