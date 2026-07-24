import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover">
      <main className="flex flex-col justify-center items-center mx-auto max-w-5xl h-dvh">
        <div className="flex flex-col gap-6 bg-black/90 mx-auto p-12 rounded-xl w-4/5 sm:max-w-96 text-white sm:text-2xl">
          <h1 className="font-bold text-4xl">
            Lucy&apos;s Computer <br /> 
            Repair Shop
          </h1>
          <address>
            <p>123 Main Street</p>
            <p>CityVille, ST 12345</p>
          </address>
          <p>Open Daily: 9am - 6pm</p>
          <Link href="tel:5555555555" className="hover:underline">Call Us: (555)-555-5555</Link>
        </div>
      </main>
    </div>
  );
}
