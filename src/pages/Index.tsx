
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Shield, Code, BookLock, Cpu, ChevronRight } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import TrackCard from '@/components/TrackCard';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Index = () => {
  // Set target date for the hackathon (2 months from now)
  const targetDate = new Date();
  targetDate.setMonth(targetDate.getMonth() + 2);

  const tracks = [
    {
      title: "Malware Detection",
      description: "Create innovative solutions to detect and prevent malware threats using machine learning and AI.",
      prize: "$5,000",
      difficulty: "Intermediate" as const,
      icon: <Shield size={24} />
    },
    {
      title: "Blockchain Security",
      description: "Develop secure blockchain applications or tools to identify vulnerabilities in existing chains.",
      prize: "$3,000",
      difficulty: "Advanced" as const,
      icon: <BookLock size={24} />
    },
    {
      title: "Secure Coding",
      description: "Build tools to help developers write more secure code and identify vulnerabilities early.",
      prize: "$2,500",
      difficulty: "Beginner" as const,
      icon: <Code size={24} />
    },
    {
      title: "IoT Security",
      description: "Create solutions for securing the Internet of Things devices and networks from cyber threats.",
      prize: "$4,000",
      difficulty: "Intermediate" as const,
      icon: <Cpu size={24} />
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
                  Kaspersky Cybersecurity Hackathon
                </h1>
              </div>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Secure the Future: AI in Cybersecurity
              </p>
              <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
                Join the elite competition organized by ACM MIT-BLR and sponsored by Kaspersky. 
                Showcase your skills, learn from industry experts, and win exciting prizes.
              </p>
              
              <CountdownTimer targetDate={targetDate} />
              
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
                The Kaspersky Cybersecurity Hackathon brings together brilliant minds to 
                tackle the most pressing challenges in cybersecurity. With the rise of AI 
                and machine learning, we're looking for innovative solutions that can help 
                secure our digital future.
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
                      Top performers will receive internship opportunities at Kaspersky and 
                      partner organizations.
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
                Choose from four exciting tracks, each focused on a critical area of cybersecurity.
                Teams can participate in any one track.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              <h2 className="text-3xl font-bold mb-4 glow-text">Ready to Secure the Future?</h2>
              <p className="text-gray-300 mb-8">
                Join hundreds of cybersecurity enthusiasts and professionals for 
                an unforgettable hackathon experience. Registration is free but spots are limited.
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
