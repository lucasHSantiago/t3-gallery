//import Link from "next/link";

const mockUrls = [
    "https://ytkbwxnd11.ufs.sh/f/Y2jCl0H2Iab8jKGoZz01Gixa2VRwuF0bmcQYgMkeU7hAI8j6"
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));

export default function HomePage() {
    return (
        <main className="">
            <div className="flex flex-wrap"> {
                mockImages.map((image) => (
                    <div key={image.id} className="w-1/2 p-4">
                        <img src={image.url} />
                    </div>
                ))
            }
            </div>
        </main>
    );
}
