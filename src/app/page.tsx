import { 
  Hero, 
  DistinguishedAlumniSection, 
  UpcomingEvents, 
  LatestNews,
  CallToAction 
} from "@/components/Landing";

export default function Home() {
  return (
    <>
      <Hero />
      <DistinguishedAlumniSection />
      <LatestNews />
      <UpcomingEvents />
      <CallToAction />
    </>
  );
}
