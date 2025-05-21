import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const { alias ,field, prestige, department, subtopic, workType } = data;

// Log or process the form data
//  console.log("Form submitted:", body);

  // You can later add logic here to query LLM, DB, etc.
  //return NextResponse.json({ success: true, message: "Form received", data: body });
//}

  // Simple mock logic for demo purposes
  const suggestions = [
  {
    name: "Dr. Jane Smith",
    university: "MIT",
    rank: "Top 100",
    department: "Physics",
    field: "Astrophysics",
    subtopics: ["Exoplanets", "Stellar Astrophysics"],
    workTypes: ["Observational", "Computational"]
  },
  {
    name: "Dr. Carlos Rivera",
    university: "University of Toronto",
    rank: "Top 100",
    department: "Astronomy",
    field: "Astrophysics",
    subtopics: ["RR Lyrae", "Cepheids"],
    workTypes: ["Observational"]
  },
  {
    name: "Dr. Akiko Tanaka",
    university: "Kyoto University",
    rank: "100-250",
    department: "Engineering",
    field: "AI/ML",
    subtopics: ["Reinforcement Learning"],
    workTypes: ["Computational"]
  },
  {
    name: "Dr. Jane Liu",
    university: "MIT",
    ranking: "Top 100",
    department: "Physics",
    topics: ["Exoplanets", "Hot Jupiters"],
    workType: ["Observational", "Computational"],
    website: "https://physics.mit.edu/faculty/jane-liu/",
  },
  {
    name: "Dr. Carlos Fernandez",
    university: "University of Toronto",
    ranking: "Top 100",
    department: "Astronomy",
    topics: ["Stellar Astrophysics", "RR Lyrae"],
    workType: ["Theoretical", "Observational"],
    website: "https://astro.utoronto.ca/people/fernandez/",
  },
  {
    name: "Dr. Meera Patel",
    university: "University of Delhi",
    ranking: "500-1000",
    department: "Physics",
    topics: ["Cepheids", "Exoplanets"],
    workType: ["Computational"],
    website: "https://du.ac.in/faculty/meera-patel",
  },
  {
    name: "Dr. Tomoko Tanaka",
    university: "Kyoto University",
    ranking: "100-250",
    department: "Astronomy",
    topics: ["Hot Jupiters", "RR Lyrae"],
    workType: ["Observational"],
    website: "https://www.astronomy.kyoto-u.ac.jp/tanaka",
  },
  {
    name: "Dr. Alan Green",
    university: "University of Cape Town",
    ranking: "250-500",
    department: "Engineering",
    topics: ["Exoplanets"],
    workType: ["Experimental", "Computational"],
    website: "https://uct.ac.za/faculty/alan-green",
  },
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

    const message = `
Hi ${alias},

Based on your interest in **${field}**, especially in the area of **${subtopic}** under the **${department}** department, and your preference for ${workType.toLowerCase()} research at a university ranked in the **${prestige}** range, we will soon be able to recommend top supervisors and programs that align with your goals.

Stay tuned as we build out the database and AI assistant to give you detailed guidance!

– DoctoralAI
  `.trim();

  return NextResponse.json({ message });

}

