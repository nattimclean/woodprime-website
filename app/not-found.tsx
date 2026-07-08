import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-bold text-espresso">Page not found</h1>
      <p className="mt-3 text-stone">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link href="/" className="mt-6 rounded-md bg-brass px-6 py-3 text-sm font-semibold text-espresso hover:bg-brass-light">
        Back to Home
      </Link>
    </div>
  );
}
