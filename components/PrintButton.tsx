"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print-hidden inline-flex min-h-11 items-center rounded-full bg-[#606c38] px-5 py-2 font-semibold text-white hover:bg-[#4b572b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bc6c25]"
    >
      Print agenda
    </button>
  );
}
