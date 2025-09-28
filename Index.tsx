import Hero from "@/components/Hero";
import OurStory from "@/components/OurStory";
import Memories from "@/components/Memories";
import Proposal from "@/components/Proposal";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <OurStory />
      <Memories />
      <Proposal />
      
      {/* Footer with Love */}
      <footer className="py-8 bg-background border-t border-blush">
        <div className="max-w-4xl mx-auto text-center px-6">
          <p className="text-muted-foreground italic">
            "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage."
          </p>
          <p className="text-sm text-muted-foreground mt-4">
            Made with 💕 for the love of my life
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;