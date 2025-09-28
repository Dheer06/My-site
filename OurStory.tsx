import { Card } from "@/components/ui/card";

const OurStory = () => {
  const milestones = [
    {
      title: "First Meeting",
      description: "Tujhe dekhte hi pagal ho gaya tha i knew at that very moment ki mujhe sirf tere saath rehena hai always have and always will feel the same way no one can change that .",
      icon: "✨"
    },
    {
      date: "Mujhe maaf kardo", 
      description: "I know jo last year hua tha bohot galat kiya tha mene par aaj bhi tujhse pyaar karta hoon bohot zyada andtere bina nhi rehe skta ek mauka toh de skti ho na meri jaan ❤️",
      icon: "🙇‍♂️"
    },
    
  ];

  return (
    <section className="py-20 px-6 soft-gradient">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our Love Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every great love story is beautiful, but ours is my favorite
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {milestones.map((milestone, index) => (
            <Card 
              key={index} 
              className="p-8 bg-card/80 backdrop-blur-sm border-blush shadow-soft hover:shadow-romantic transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="text-4xl opacity-80 floating-hearts">
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-romantic-pink uppercase tracking-wider mb-2">
                    {milestone.date}
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;