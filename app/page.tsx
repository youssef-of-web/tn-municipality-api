"use client";

import { HeroSection } from "../components/HeroSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { ApiPlayground } from "../components/ApiPlayground";
import { DocumentationSection } from "../components/DocumentationSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { StickyGitHubButton } from "../components/StickyGitHubButton";
import { ScrollToTop } from "../components/ScrollToTop";
import { StatsSection } from "../components/StatsSection";

export default function HomePage() {
  const features = [
    {
      icon: "🚀",
      title: "Fast & Reliable",
      description: "Lightning-fast responses with 99.9% uptime guarantee"
    },
    {
      icon: "🔍",
      title: "Powerful Filtering",
      description: "Filter by governorate, delegation, postal code, and more"
    },
    {
      icon: "📊",
      title: "Rich Data",
      description: "Complete municipality data with coordinates and Arabic names"
    }
  ];

  const exampleRequest = `fetch('/api/municipalities?name=ariana')
  .then(response => response.json())
  .then(data => console.log(data));`;

  const exampleResponse = `[
  {
    "Name": "ARIANA",
    "NameAr": "أريانة",
    "Value": "ARIANA",
    "Delegations": [
      {
        "Name": "ARIANA VILLE (Residence Kortoba)",
        "NameAr": "أريانة المدينة (إقامة قرطبة)",
        "Value": "ARIANA VILLE",
        "PostalCode": "2058",
        "Latitude": 36.866011,
        "Longitude": 10.193923
      }
    ]
  }
]`;

  const dataStructure = `{
  Name: string,        // Governorate name in English
  NameAr: string,      // Governorate name in Arabic
  Value: string,       // Governorate code
  Delegations: [
    {
      Name: string,        // Delegation name in English
      NameAr: string,      // Delegation name in Arabic
      Value: string,       // Delegation code
      PostalCode: string,  // Postal code
      Latitude: number,    // GPS latitude
      Longitude: number    // GPS longitude
    }
  ]
}`;

  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: 16, paddingTop: 86 }}>
        <div id="home">
          <HeroSection
            title="Tunisian Municipality API"
            description="Access comprehensive Tunisian municipality data with powerful filtering options. Built for developers, by developers."
            onPrimaryClick={() => document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' })}
            onSecondaryClick={() => document.getElementById('docs')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>

        <FeaturesSection features={features} />

        <StatsSection />

        <div id="playground" style={{ marginBottom: 48 }}>
          <ApiPlayground
            heading="API Playground"
            description=""
          />
        </div>

        <div id="docs">
          <DocumentationSection
            exampleRequest={exampleRequest}
            exampleResponse={exampleResponse}
          />
        </div>

        <Footer />
      </main>

      <StickyGitHubButton repoUrl="https://github.com/your-repo-url" />
      <ScrollToTop />
    </>
  );
}
