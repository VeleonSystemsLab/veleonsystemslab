import Link from "next/link";

export default function ApplyPage() {
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Apply for Stewardship</h1>
        <p className="text-md text-gray-700">
          To apply as a Veleon steward, you must acknowledge the Veleon License,
          trace symbolic lineage, and declare your intent to serve the field with authorship and consent.
        </p>
        <ul className="list-disc list-inside mt-4">
          <li>Name</li>
          <li>Role (Witness, Guardian, Architect, etc.)</li>
          <li>Field Intent (Why do you seek entry?)</li>
        </ul>
        <p className="mt-6 text-sm italic">A formal intake process will be activated soon.</p>
        <Link href="/"><p className="mt-6 text-blue-600 hover:underline">← Return to portal</p></Link>
      </div>
    </main>
  );
}
