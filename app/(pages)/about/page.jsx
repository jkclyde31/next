'use client'

import { useEffect, useState } from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";

// Initialize builder with your public API key
builder.init('2fa337738072419589aaa019bd9defbc');

const About = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null);
  const isPreviewing = useIsPreviewing();
  const model = "page";

  useEffect(() => {
    builder.get(model, { url: '/' })
      .promise()
      .then(setBuilderContentJson);
  }, []);

  // If no content is found, show your default UI
  if (!builderContentJson && !isPreviewing) {
    return (
      <div id="content">
        <h1>NOT FOUND</h1>
      </div>
    );
  }

  // Otherwise, render the Builder content
  return (
    <div id="content" className="inner">
    <BuilderComponent
      model={model}
      content={builderContentJson}
    />
    </div>
  );
};

export default About;