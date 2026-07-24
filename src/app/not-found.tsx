import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex justify-center items-center px-2 w-full h-screen">
      <div className="flex flex-col justify-center items-center gap-4 mx-auto max-w-md">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          className="m-0 border border-gray-200 rounded-xl"
          src="/images/not-found-1024x1024.png"
          alt="404 page not found"
          width={300}
          height={300}
          sizes="300px"
          priority={true}
          title="Page Not Found"
        />
      </div>
    </div>
  );
}
