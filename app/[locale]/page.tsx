"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { HeroSection } from "../../components/HeroSection";
import { FeaturesSection } from "../../components/FeaturesSection";
import { ApiPlayground } from "../../components/ApiPlayground";
import { DocumentationSection } from "../../components/DocumentationSection";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { StickyGitHubButton } from "../../components/StickyGitHubButton";
import { ScrollToTop } from "../../components/ScrollToTop";
import { StatsSection } from "../../components/StatsSection";

const InteractiveMap = dynamic(
  () => import("../../components/InteractiveMap"),
  { ssr: false },
);

export default function HomePage() {
  const tHero = useTranslations("hero");
  const tFeatures = useTranslations("features");
  const tPlayground = useTranslations("playground");

  const features = [
    {
      icon: "📊",
      title: tFeatures("richData.title"),
      description: tFeatures("richData.description"),
    },
    {
      icon: "🔍",
      title: tFeatures("powerfulFiltering.title"),
      description: tFeatures("powerfulFiltering.description"),
    },
    {
      icon: "🚀",
      title: tFeatures("fastReliable.title"),
      description: tFeatures("fastReliable.description"),
    },
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
      <main
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: 16,
          paddingTop: 86,
        }}
      >
        <div id="home">
          <HeroSection
            title={tHero("title")}
            description={tHero("description")}
            primaryButtonText={tHero("primaryButton")}
            secondaryButtonText={tHero("secondaryButton")}
            onPrimaryClick={() =>
              document
                .getElementById("playground")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            onSecondaryClick={() =>
              document
                .getElementById("docs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          />
        </div>

        <FeaturesSection features={features} />

        <StatsSection />

        <div id="map" style={{ marginBottom: 48 }}>
          <InteractiveMap />
        </div>

        <div id="playground" style={{ marginBottom: 48 }}>
          <ApiPlayground
            heading={tPlayground("title")}
            description={tPlayground("description")}
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

      <StickyGitHubButton repoUrl="https://github.com/youssef-of-web/tn-municipality-api" />
      <ScrollToTop />
    </>
  );
}
