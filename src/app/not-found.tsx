import { Button } from "@/components/ui/Button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-5">
      <h1 className="text-center text-7xl font-black">404</h1>
      <h1 className="text-center text-4xl font-bold">Page Not Found</h1>
      <p className="text-center text-sm font-medium">
        Verify the URL or return to homepage.
      </p>
      <Link href="/">
        <Button>Back to Home</Button>
      </Link>
    </main>
  );
};

export default NotFoundPage;
