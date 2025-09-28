import { Button } from "@/components/ui/button";
import heroCouple from "@/assets/hero-couple.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroCouple} 
          alt="Romantic couple silhouette at sunset" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      </div>
      
      {/* Floating Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-romantic-pink-light opacity-30 floating-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${Math.random() * 20 + 20}px`
            }}
          >
            💕
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl animate-fade-in-up">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold text-soft-white mb-8 drop-shadow-lg">
          My Dearest Love
        </h1>
        <p className="text-xl md:text-2xl text-soft-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Every moment with you feels like a beautiful dream. Today, I want to turn that dream into our forever reality...
        </p>
       
      </div>
    </section>
  );
};

export default Hero;