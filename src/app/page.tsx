import { getE621Posts } from "@/lib/e621";
import SiteContent from "@/components/SiteContent";

export default async function Home() {
  const posts = await getE621Posts();
  return <SiteContent posts={posts} />;
}
