import { Skeleton } from "primereact/skeleton";
// Skeleton template of the PostsView component
const SkeletonTemplate = () => (
  <div className="w-full h-full p-5">
    <div className="flex justify-content-between w-full">
      <div style={{ width: "30%" }} className="flex gap-4 mb-4">
        <Skeleton height="2rem" />
        <Skeleton height="2rem" />
      </div>
    </div>

    <div style={{ width: "50%" }} className="flex gap-4 mb-4">
      <Skeleton height="2rem" />
    </div>
    <div className="flex gap-4 w-full mb-4">
      <Skeleton height="4rem" />
    </div>
    <div className="flex gap-4 w-full mb-4">
      <Skeleton height="13rem" />
    </div>
    <div className="flex justify-content-between w-full gap-5 mb-4">
      <Skeleton height="2rem" />
      <Skeleton height="2rem" />
    </div>
  </div>
);
export { SkeletonTemplate };
