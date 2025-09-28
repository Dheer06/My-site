import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Proposal = () => {
  return (
    <section className="py-32 px-6 romantic-gradient relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute text-soft-white/20 floating-hearts"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${Math.random() * 30 + 30}px`
            }}
          >
            {['💕', '💖', '💝', '💗', '💓', '💘','💕', '💖', '💝', '💗', '💓', '💘','💕', '💖', '💝', '💗', '💓', '💘','💕', '💖', '💝', '💗', '💓', '💘'][Math.floor(Math.random() * 18)]}
          </div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <Card className="p-12 bg-soft-white/95 backdrop-blur-sm border-0 shadow-glow">
          <div className="mb-8">
            <div className="text-6xl mb-6 pulse-romantic"></div>
            <h5 className="font-playfair text-2xl md:text-6xl font-bold text-foreground mb-8">
              Kya mujhe ek mauka mil skta? 
            </h5>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            <p>
              I know its been a long time par mei ye tujhe puch rha hoon... 🤔 will u be mine with a promise of forever? 
            </p>
            <p>
              I promise to never hurt you, tujhe sab dunga jo tu deserve karti love, respect, loyalty. Thodi si jealousy par bas itni ki tujhe aur special feel karwau😉
            </p>
            <p className="font-semibold text-romantic-pink text-xl">
Toh meri bhumi dhumi  meri jaan meri jaaneman meri bhagu master the best and most fun, loving person i ever met can you give me the permission to make you mine . Can u give me one chance to prove myself to you. ❤️❤️ Will you take my hand and let me make you the happiest person I can? 💍.            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
          </div>
          
          <div className="mt-12 text-sm text-muted-foreground italic">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </div>
        </Card>
      </div>
    </section>
  );
}; 

export default Proposal;