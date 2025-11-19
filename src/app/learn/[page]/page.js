import { Suspense } from "react";
import ParentComponent from "./components/Parent";

const page = () => {
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <ParentComponent />
      </Suspense>
    </>
  );
};

export default page;
