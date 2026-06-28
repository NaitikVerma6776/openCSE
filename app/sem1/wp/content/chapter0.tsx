export function Ch0Content() {
  return (
    <div className="space-y-6 text-[#e2d1c1]">
      <p className="text-lg leading-relaxed opacity-90">
        Workshop Practice introduces first-year engineering students to hands-on
        manufacturing and fabrication skills across various engineering trades. This
        module covers fitting, welding, carpentry, smithy, sheet metal, foundry, and
        turning shops — including theory, tools, safety practices, and viva questions.
      </p>

      <div className="bg-[#2a1500] rounded-xl p-5 border border-[#fccc7e]/30 space-y-3">
        <h3 className="text-xl font-semibold text-[#fccc7e]">Shops at a Glance</h3>
        <ul className="list-disc list-inside space-y-1 opacity-90">
          <li><strong>Ch 1</strong> — Fitting Shop: hand tools, marking, filing</li>
          <li><strong>Ch 2</strong> — Welding Shop: arc &amp; gas welding basics</li>
          <li><strong>Ch 3</strong> — Carpentry Shop: wood joints &amp; finishing</li>
          <li><strong>Ch 4</strong> — Smithy Shop: forging operations</li>
          <li><strong>Ch 5</strong> — Sheet Metal Shop: bending, cutting, joining</li>
          <li><strong>Ch 6</strong> — Foundry Shop: sand casting process</li>
          <li><strong>Ch 7</strong> — Turning Shop: lathe machine operations</li>
        </ul>
      </div>

      <div className="bg-[#2a1500] rounded-xl p-5 border border-[#fccc7e]/30 space-y-3">
        <h3 className="text-xl font-semibold text-[#fccc7e]">What Each Shop Module Covers</h3>
        <ul className="list-disc list-inside space-y-1 opacity-90">
          <li>Introduction and theory</li>
          <li>Important tools used</li>
          <li>Safety measures</li>
          <li>Labelled diagrams</li>
          <li>Most asked viva questions</li>
        </ul>
      </div>
    </div>
  );
}