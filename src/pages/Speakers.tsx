
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SpeakerCard from '@/components/SpeakerCard';

const Speakers = () => {
  const speakers = [
    {
      name: "Eugene Kaspersky",
      role: "CEO & Founder",
      company: "Kaspersky",
      bio: "Eugene Kaspersky is a cybersecurity expert and the CEO of Kaspersky. With over 30 years of experience, he has helped develop some of the most advanced cybersecurity solutions in the industry.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=EK",
      twitter: "https://twitter.com/e_kaspersky",
      linkedin: "https://linkedin.com/in/ekaspersky"
    },
    {
      name: "Maria Petrova",
      role: "Senior Security Researcher",
      company: "Kaspersky",
      bio: "Maria specializes in advanced threat detection and has led research teams investigating some of the most sophisticated cyber espionage campaigns.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=MP",
      linkedin: "https://linkedin.com/in/mpetrova"
    },
    {
      name: "Dr. Amit Kumar",
      role: "Professor",
      company: "MIT-BLR",
      bio: "Dr. Kumar heads the Cybersecurity Research Center at MIT-BLR and has published numerous papers on AI applications in security.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=AK",
      twitter: "https://twitter.com/drkumar",
      linkedin: "https://linkedin.com/in/amitkumar"
    },
    {
      name: "Alex Chen",
      role: "Senior Developer",
      company: "Kaspersky",
      bio: "Alex leads the secure coding initiatives at Kaspersky and has developed several tools to help developers write more secure code.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=AC",
      linkedin: "https://linkedin.com/in/alexchen"
    },
    {
      name: "Sarah Johnson",
      role: "VP of Product",
      company: "Kaspersky",
      bio: "Sarah oversees Kaspersky's consumer product line and has been instrumental in developing user-friendly security solutions.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=SJ",
      twitter: "https://twitter.com/sarahjohnson",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      name: "Raj Patel",
      role: "Ethical Hacker",
      company: "CyberSafe",
      bio: "Raj is a renowned ethical hacker who has helped identify vulnerabilities in critical systems for major corporations and governments.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=RP",
      twitter: "https://twitter.com/rajpatel",
      linkedin: "https://linkedin.com/in/rajpatel"
    },
    {
      name: "Priya Singh",
      role: "Blockchain Security Expert",
      company: "SecureChain",
      bio: "Priya specializes in blockchain security and has developed several tools to identify vulnerabilities in smart contracts.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=PS",
      linkedin: "https://linkedin.com/in/priyasingh"
    },
    {
      name: "Michael Zhang",
      role: "IoT Security Specialist",
      company: "Kaspersky",
      bio: "Michael leads Kaspersky's IoT security research team and has discovered critical vulnerabilities in popular connected devices.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=MZ",
      twitter: "https://twitter.com/michaelzhang",
      linkedin: "https://linkedin.com/in/michaelzhang"
    }
  ];

  const judges = [
    {
      name: "Elena Kozlova",
      role: "Head of R&D",
      company: "Kaspersky",
      bio: "Elena leads Kaspersky's research and development department and has over 20 years of experience in cybersecurity.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=EL",
      linkedin: "https://linkedin.com/in/elenakozlova"
    },
    {
      name: "Dr. James Wilson",
      role: "CISO",
      company: "Global Bank",
      bio: "Dr. Wilson oversees cybersecurity operations for one of the world's largest financial institutions.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=JW",
      twitter: "https://twitter.com/drjwilson",
      linkedin: "https://linkedin.com/in/jameswilson"
    },
    {
      name: "Professor Lakshmi Narayan",
      role: "Department Head",
      company: "MIT-BLR Computer Science",
      bio: "Professor Narayan specializes in AI and machine learning applications in security and leads the CS department at MIT-BLR.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=LN",
      linkedin: "https://linkedin.com/in/lakshminarayan"
    },
    {
      name: "Hiroshi Tanaka",
      role: "Venture Capitalist",
      company: "CyberFund Ventures",
      bio: "Hiroshi invests in promising cybersecurity startups and has helped numerous companies scale their innovations.",
      image: "https://placehold.co/100x100/1A1F2C/4ADE80?text=HT",
      twitter: "https://twitter.com/hirotanaka",
      linkedin: "https://linkedin.com/in/hiroshitanaka"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">Speakers & Judges</h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Meet the industry experts who will be sharing their knowledge and evaluating your projects.
              </p>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-cyber-green">Featured Speakers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {speakers.map((speaker) => (
                    <SpeakerCard 
                      key={speaker.name}
                      name={speaker.name}
                      role={speaker.role}
                      company={speaker.company}
                      bio={speaker.bio}
                      image={speaker.image}
                      twitter={speaker.twitter}
                      linkedin={speaker.linkedin}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-cyber-green">Judges Panel</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {judges.map((judge) => (
                    <SpeakerCard 
                      key={judge.name}
                      name={judge.name}
                      role={judge.role}
                      company={judge.company}
                      bio={judge.bio}
                      image={judge.image}
                      twitter={judge.twitter}
                      linkedin={judge.linkedin}
                    />
                  ))}
                </div>
              </div>
              
              <div className="mt-16 p-6 bg-cyber-darker rounded-md border border-cyber-green/20">
                <h3 className="text-xl font-bold mb-4">Become a Speaker or Judge</h3>
                <p className="text-gray-300 mb-4">
                  Are you an expert in cybersecurity or related fields? We're always looking 
                  for knowledgeable professionals to join our speaker lineup or judging panel 
                  for future events.
                </p>
                <p className="text-gray-300">
                  Please contact us at <a href="mailto:speakers@acmmit.org" className="text-cyber-green hover:underline">speakers@acmmit.org</a> with your CV and areas of expertise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Speakers;
