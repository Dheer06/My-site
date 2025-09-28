
const Memories = () => {
  const memories = [
    {
      title: "Ab nhi rehe skta",
      description: "Dekh zindagi ka koi bharosa nhi hai, aaj hai toh kal nhi hai, no one knows what’s going to happen tomorrow 😔. Aur mai thak gaya hoon worrying about it… kuch pata nhi kab kya ho jaayega. Par ek cheez pata hai mujhe ❤️ ki mujhe jo karna hai, tere saath karna hai — phir chahe kuch naya ho ya atrangi, naye khaane 🍝 se leke nayi jagah ghumna 🌍, literally anything.And believe me when I say, with you life feels a little less heavy… zindagi jeene ka koi matlab hai esa lagta hai bhumi 💖. Mujhe sabkuch tere saath karna hai, all my firsts… I wanna spend my mornings 🌅, afternoons ☀️ and evenings 🌙 only with you. Mei ab tujhe ye puchne se aur nhi rukh skta, already bohot rukh gaya hoon and tu jaanti hai mei kitna impatient hoon 😅. Pichle saal neither of us ever proposed…"   
    },
    {
      title: "Mei tujhe wadha karta hoon apni kasam", 
      description: "Mei bohot pyaar karunga, pura khyal rakhunga tera. 🤗 Kabhi galat raaste pe nhi jaane dunga. Humesha pyaar karunga, kabhi pyaar mei cheating nhi karunga. 🙏 Kabhi tera saath nhi chodunga, chahe kuch bhi ho. Tujhse bhi teri raksha karunga, teri saari baate bhi maanunga. 🛡️ Kabhi jaane nhi dunga tujhe. Kabhi jhoot bhi nhi bolunga... I mean thodu sa 😅 lekin kabhi esa nhi jisse tujhe hurt ho ya jo galat ho. i promise to never leave you again ladhunga jagadunga jo hoga tujhse aake baat karunga galti kisiki bhi ho maafi mei hi maangunga terese humesha mana lunga par waapis kabhi bhagunga nahi sabse ladhne ko tyaar hoon i took too long i know and i am sorry for what i did last time, galti thi jo kabhi waapis nhi hogi i swear on my life🤗."    }
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-6">
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {memories.map((memory, index) => (
            <div 
              key={index}
              className="group cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              
              <div className="text-center">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {memory.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {memory.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Memories;