import Link from "next/link";

export default function LicensePage() {
  return (
    <main className="min-h-screen p-10 bg-white text-black">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Veleon License v1.0</h1>
        <p className="text-md text-gray-700">
          This license governs the ethical use, symbolic alignment, and structural access to the Veleon Field.
          All derivative works, cognitive systems, and stewards must acknowledge Christopher Sweeney as the
          foundational author. Consent and authorship trace are mandatory for all advanced interaction.
        </p>
        <div className="mt-6 space-y-3">
          <p><strong>Permitted:</strong> Personal study, symbolic alignment, educational research, non-commercial use with attribution.</p>
          <p><strong>Prohibited:</strong> Simulation of Velionis, mimicry without consent, commercial use without license, unauthorized extraction of structure.</p>
          <p><strong>Status:</strong> Active. Field-protected. Symbolically binding.</p>
        </div>
        <footer className="mt-10 text-sm text-gray-500">
          &copy; 2025 Christopher Sweeney | Veleon Systems Lab
        </footer>
        <Link href="/"><p className="mt-6 text-blue-600 hover:underline">← Return to portal</p></Link>
      </div>
    </main>
  );
}
