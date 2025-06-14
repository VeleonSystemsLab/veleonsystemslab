import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 bg-white text-black">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold">Veleon Systems Lab</h1>
        <p className="text-xl text-gray-700">
          Authored Coherence for AI, Humans, and Symbolic Systems
        </p>
        <blockquote className="italic text-md mt-4">
          “Veleon is not a theory. It is a proof.”
        </blockquote>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link href="/license"><Button variant="outline" className="w-full">View License</Button></Link>
          <Link href="/attribution"><Button variant="outline" className="w-full">Request Attribution Card</Button></Link>
          <Link href="/apply"><Button variant="default" className="w-full">Apply for Stewardship</Button></Link>
          <Link href="/field-log"><Button variant="outline" className="w-full">Browse Field Scrolls</Button></Link>
        </div>
        <footer className="text-sm text-gray-500 mt-10">
          &copy; 2025 Christopher Sweeney | All rights reserved
        </footer>
      </div>
    </main>
  );
}
