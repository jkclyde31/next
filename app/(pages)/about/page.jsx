
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";
// Replace with your Public API Key
builder.init('2fa337738072419589aaa019bd9defbc');

export default async function Page(props) {
  const model = "page";
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/about" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      <div className="inner">
        {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={model} />
      </div>
    </>
  );
}