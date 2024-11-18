import Skeleton from "@/components/skeleton";

export default function Loading() {
  return (
    <div className="animate-pulse flex flex-col items-center gap-y-4 pt-28">
      <Skeleton />
      <Skeleton className="w-[500px]" />
      <Skeleton className="w-[560px]"/>
      <Skeleton className="w-[460px]"/>
    </div>
  );
}
