//import Link from "next/link";

import { db } from "~/server/db";

const mockUrls = [
  "https://ytkbwxnd11.ufs.sh/f/Y2jCl0H2Iab8jKGoZz01Gixa2VRwuF0bmcQYgMkeU7hAI8j6",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-1/2 p-4">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
