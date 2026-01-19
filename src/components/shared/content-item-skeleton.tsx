export const ContentItemSkeleton = () => {
  return Array.from({ length: 6 }).map((_, index) => (
    <div
      key={index}
      className="flex flex-col gap-4  bg-gray-100 rounded-lg animate-pulse"
    >
      <div className="flex flex-col gap-2 rounded border bg-gray-300 h-[114px]"></div>
    </div>
  ));
};
