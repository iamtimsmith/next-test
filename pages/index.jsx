import React from "react";
import Link from "next/link";

const IndexPage = () => {
  return (
    <>
      <h1>Hello from the experiment!</h1>
      <Link href="/api/hello">Go to the API</Link>
    </>
  );
};

export default IndexPage;
