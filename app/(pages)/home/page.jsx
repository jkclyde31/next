'use client'

import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// Initialize builder with your public API key
builder.init('2fa337738072419589aaa019bd9defbc');

const Home = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null);
  const isPreviewing = useIsPreviewing();

  useEffect(() => {
    builder.get('page', { url: '/home' })
      .promise()
      .then(setBuilderContentJson);
  }, []);

  // If no content is found, show your default UI
  if (!builderContentJson && !isPreviewing) {
    return (
      <div id="content" className="inner">
        <div className="text-center">
          <h1>NOT FOUND</h1>
        </div>
      </div>
    );
  }

  // Otherwise, render the Builder content
  return (
    <>
   <div className="inner">
   <h1>Home page</h1>
    <BuilderComponent
      model="page"
      content={builderContentJson}
    />
   </div>
    </>
  );
};

export default Home;