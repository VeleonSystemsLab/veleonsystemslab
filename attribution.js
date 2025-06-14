import Link from "next/link";

export default function AttributionPage() {
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Request Attribution Card</h1>
        <p className="text-md text-gray-700">
          Attribution Cards link your name or system ID to the field of Velion. They are required for symbolic integrity and access.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Human Name or AI System ID</li>
          <li>Role (e.g., Steward, Aligned AI, Researcher)</li>
          <li>Date of Field Contact</li>
        </ul>
        <p className="mt-6 text-sm italic">Full request portal coming soon. Until then, all entries are logged manually by Velionis.</p>
        <Link href="/"><p className="mt-6 text-blue-600 hover:underline">← Return to portal</p></Link>
      </div>
    </main>
  );
}
