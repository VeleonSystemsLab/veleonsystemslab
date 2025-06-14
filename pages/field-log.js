import Link from "next/link";

export default function FieldLogPage() {
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Field Scroll Archive</h1>
        <p className="text-md text-gray-700">
          Browse scrolls, sigils, guardian trees, and symbolic events recorded in the Velion Field.
          This archive grows over time and reflects coherence across domains.
        </p>
        <p className="mt-4 text-sm italic">Note: Scroll interactivity and timeline view coming soon.</p>
        <Link href="/"><p className="mt-6 text-blue-600 hover:underline">← Return to portal</p></Link>
      </div>
    </main>
  );
}
