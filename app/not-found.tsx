import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#09090B]">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-violet-500">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>
        <p className="mt-4 text-gray-400">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-500"
        >
          Back Home
        </Link>
      </div>
    </main>
  );
}