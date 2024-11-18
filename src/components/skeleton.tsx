import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type SkeletonProps = {
  className?: ClassValue;
};

export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div className={cn("h-4 w-[550px] rounded-md bg-white/5", className)} />
  );
}
