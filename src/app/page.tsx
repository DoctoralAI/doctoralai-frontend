// app/page.tsx

//import Navbar from "@/components/Navbar";

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      <Navbar />
      <section className="px-6 py-20 text-center max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">
          Your AI Advisor for Grad School Admissions
        </h1>
        <p className="text-lg mb-6">
          DoctoralAI helps STEM applicants find the right supervisors, build strong applications, and identify funding opportunities — all powered by AI.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-md hover:bg-gray-800">
          Join the Waitlist
        </button>
      </section>

      <section className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8">What We Help With</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FeatureCard title="Supervisor Matching" description="We analyze your profile and research interests to connect you with ideal advisors." />
          <FeatureCard title="Application Building" description="Our AI helps you write and polish SOPs, CVs, and emails." />
          <FeatureCard title="Research Fit Evaluation" description="See which labs and projects align best with your goals." />
          <FeatureCard title="Funding Discovery" description="Find scholarships, assistantships, and grants based on eligibility." />
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Demo (Coming Soon)</h2>
        <p className="mb-4">
          We’re building an interactive demo to showcase how DoctoralAI works.
        </p>
        <input
          type="email"
          placeholder="Enter your email to get notified"
          className="border px-4 py-2 rounded-l"
        />
        <button className="bg-black text-white px-4 py-2 rounded-r">
          Subscribe
        </button>
      </section>

      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} DoctoralAI · All rights reserved
      </footer>
    </main>
  );
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
