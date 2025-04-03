
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Code, BookLock, Cpu, ChevronRight } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import TrackCard from '@/components/TrackCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Set target date for the hackathon (July 29-30, 2025)
  const targetDate = new Date('July 29, 2025');

  const tracks = [
    {
      title: "The Transformation of ICS and Cyber Threats",
      description: "Explore the security challenges in Industrial Control Systems (ICS) as they transition from standalone to interconnected components of critical infrastructure.",
      prize: "Kaspersky xTraining Courses",
      difficulty: "Advanced" as const,
      icon: <Shield size={24} />
    },
    {
      title: "AI vs AI – Detecting Deepfake & Misinformation",
      description: "Combat AI-generated misinformation and deepfakes used for political manipulation, social engineering, financial scams, and cyber warfare.",
      prize: "Kaspersky xTraining Courses",
      difficulty: "Intermediate" as const,
      icon: <BookLock size={24} />
    },
    {
      title: "Trapping the Honey Trapper",
      description: "Develop solutions to counter social media honey traps targeting military personnel, government officials, and corporate executives.",
      prize: "Kaspersky xTraining Courses",
      difficulty: "Intermediate" as const,
      icon: <Code size={24} />
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16">
          <div className="container mx-auto px-4 pt-10 sm:pt-16 lg:pt-20">
            <div className="text-center">
              <div className="inline-block mx-auto">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight glow-text animate-pulse-glow">
                  HackSky: Kaspersky Academy Pan-India Hackathon
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                29-30 July 2025 • Manipal Institute of Technology, Bengaluru
              </p>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                The digital world is evolving at lightning speed—but so are the threats that lurk in the shadows. 
                From emerging cyber threats to disinformation and deepfakes, the battleground of cybersecurity is more intense than ever.
                This is where YOU step in.
              </p>
              
              <CountdownTimer targetDate={targetDate} initialDays={81} />
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <Button size="lg" asChild>
                  <Link to="/register">Register Now</Link>
                </Button>
                <Button variant="outline" size="lg" className="cyber-border" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">About The Hackathon</h2>
              <p className="text-gray-300">
                Over the next few months, the brightest student minds in tech will unite to tackle real-world security challenges, 
                push the boundaries of innovation, and showcase their prowess in cybersecurity. Whether you're an aspiring cyber defender, 
                a coder with a cause, or a tech enthusiast ready to disrupt the disruptors, this is your moment to shine.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">World-Class Experts</h3>
                    <p className="text-gray-400">
                      Learn from Kaspersky's cybersecurity professionals and industry leaders
                      through workshops, talks, and mentoring sessions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green">
                    <Cpu size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Cutting-Edge Resources</h3>
                    <p className="text-gray-400">
                      Access to state-of-the-art tools, APIs, and datasets to build your 
                      innovative solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green">
                    <BookLock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Exclusive Opportunities</h3>
                    <p className="text-gray-400">
                      Top performers will receive Kaspersky xTraining courses worth up to $2,500 and cash prizes.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video bg-cyber-dark border border-cyber-green/20 rounded-md overflow-hidden cyber-border">
                  <div className="absolute inset-0 grid-bg"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-cyber-green font-mono opacity-80">
                      Promo Video Coming Soon
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="ghost" asChild>
                <Link to="/about" className="text-cyber-green hover:text-cyber-blue inline-flex items-center">
                  Learn more about the event
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 glow-text">Hackathon Tracks</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from three exciting tracks, each focused on a critical area of cybersecurity.
                Teams can participate in any one track.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tracks.map((track) => (
                <TrackCard 
                  key={track.title}
                  title={track.title}
                  description={track.description}
                  prize={track.prize}
                  difficulty={track.difficulty}
                  icon={track.icon}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" className="cyber-border" asChild>
                <Link to="/register">
                  Register for a Track
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 glow-text">Ready to Outsmart Cyber Adversaries?</h2>
              <p className="text-gray-300 mb-8">
                Are you ready to outsmart cyber adversaries, expose digital deception, and build the future of security? 
                Join hundreds of cybersecurity enthusiasts for an unforgettable HackSky experience.
              </p>
              <Button size="lg" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
