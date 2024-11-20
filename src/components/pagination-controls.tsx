import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  prevPage: string;
  nextPage: string;
};

const btnStyles =
  "flex items-center gap-x-2 text-white px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 transition text-sm";

export default function PaginationControls({
  prevPage,
  nextPage,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {prevPage ? (
        <Link href={prevPage} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPage ? (
        <Link href={nextPage} className={btnStyles}>
          <ArrowRightIcon />
          Next
        </Link>
      ) : (
        <div />
      )}
    </section>
  );
}
