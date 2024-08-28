//
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "@/components/builder";

// Replace with your Public API Key
const YOUR_API_KEY = '2fa337738072419589aaa019bd9defbc'; 
builder.init(YOUR_API_KEY);

export default async function Page(props) {
  const model = "page";
  const content = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      prerender: false,
    })
    .toPromise();

  return (
    <div id="content" className="inner">
  
      <RenderBuilderContent content={content} model={model} />
    </div>
  );
}

