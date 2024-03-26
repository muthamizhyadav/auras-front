import SanityClient, { createClient } from "@sanity/client";

export default createClient({
  projectId: "7b6w9pgz",
  dataset: "production",
  useCdn:true,
  apiVersion:"2021-08-31"
});
