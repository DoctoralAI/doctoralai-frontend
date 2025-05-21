import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { field, prestige, department, subtopic, workType } = data;

// Log or process the form data
//  console.log("Form submitted:", body);

  // You can later add logic here to query LLM, DB, etc.
  //return NextResponse.json({ success: true, message: "Form received", data: body });
//}

  // Simple mock logic for demo purposes
  const suggestions = [
    {
      university: "MIT",
      department: "Physics",
      supervisor: "Dr. Jane Quantum",
      project: "Exoplanet Atmospheres via Computational Models",
      fit: prestige === "top 100" && field === "astrophysics",
    },
    {
      university: "University of Toronto",
      department: "Astronomy",
      supervisor: "Dr. Ravi Stellar",
      project: "RR Lyrae Variable Star Survey (Observational)",
      fit: subtopic.includes("RR lyrae") && workType.includes("Observation"),
    },
    {
      university: "University of Edinburgh",
      department: "Astrophysics",
      supervisor: "Dr. Maria Nova",
      project: "Stellar Evolution Simulations (Theoretical)",
      fit: workType.includes("Theoretical"),
    },
  ];

  // Filter suggestions for "fit"
  const matched = suggestions.filter(s => s.fit);

  return NextResponse.json({
    success: true,
    message: "Mocked suggestions based on your input",
    data: matched.length > 0 ? matched : suggestions.slice(0, 2),
  });
}

