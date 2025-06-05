import { Suspense } from "react";
import Categories from "./categories";

const LeftAside = () => {
  return (
    <div>
      <Suspense
        fallback={
          <div className="grid place-content-center w-full min-h-116">
            <span className="loading loading-dots loading-xl"></span>
          </div>
        }
      >
        <Categories />
      </Suspense>
    </div>
  );
};

export default LeftAside;
