
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CircleCheck, Medal, LucideWand2, Users, CalendarDays, Clock } from 'lucide-react';

const About = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        {/* Hero Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">About HackSky</h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Learn more about HackSky, 
                its mission, and what makes it unique.
              </p>
              
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-gray-300">
                  HackSky, organized by ACM MIT-BLR, 
                  is a premier event for students, professionals, and cybersecurity enthusiasts 
                  to collaborate and develop innovative solutions to real-world security challenges.
                </p>
                
                <p className="text-gray-300 mt-4">
                  This year's theme, "Secure the Future: AI in Cybersecurity," focuses on 
                  leveraging artificial intelligence and machine learning to address emerging 
                  cybersecurity threats and vulnerabilities. Participants will work in teams 
                  to create cutting-edge solutions across various tracks.
                </p>
                
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <CalendarDays size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">When</h3>
                      <p className="text-gray-400">July 29-30, 2025</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Duration</h3>
                      <p className="text-gray-400">48 hours of non-stop hacking</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <Users size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Team Size</h3>
                      <p className="text-gray-400">2-4 members per team</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green mt-1">
                      <LucideWand2 size={20} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Format</h3>
                      <p className="text-gray-400">Online with live streaming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Eligibility Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center glow-text">Who Can Participate?</h2>
              <p className="text-center text-gray-300 mb-10">
                The hackathon is open to everyone passionate about cybersecurity and innovation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-cyber-darker p-6 rounded-lg border border-cyber-green/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Students</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Computer Science and IT students</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Cybersecurity specializations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Any degree program with interest in security</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cyber-darker p-6 rounded-lg border border-cyber-green/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Professionals</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Early career cybersecurity professionals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Software developers with security interest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>IT specialists seeking to expand skills</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-cyber-darker p-6 rounded-lg border border-cyber-green/20">
                  <h3 className="text-xl font-bold mb-4 text-white">Enthusiasts</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Self-taught developers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Cybersecurity hobbyists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CircleCheck className="text-cyber-green mt-1 shrink-0" size={18} />
                      <span>Anyone passionate about security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Participate Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center glow-text">Why Participate?</h2>
              <p className="text-center text-gray-300 mb-10">
                HackSky offers numerous benefits to participants.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <Medal size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Prizes & Recognition</h3>
                    <p className="text-gray-300">
                      Win cash prizes, Kaspersky product licenses, and recognition 
                      from industry leaders.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Networking</h3>
                    <p className="text-gray-300">
                      Connect with cybersecurity professionals, Kaspersky experts, and like-minded peers.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <LucideWand2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Skill Development</h3>
                    <p className="text-gray-300">
                      Learn cutting-edge cybersecurity techniques and tools through workshops and 
                      hands-on challenges.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="p-2 bg-cyber-green/10 rounded-md text-cyber-green h-fit">
                    <CircleCheck size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Career Opportunities</h3>
                    <p className="text-gray-300">
                      Top performers may receive internship and job opportunities at Kaspersky 
                      and partner organizations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Organizers Section */}
        <section className="py-16 bg-cyber-gray/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center glow-text">Organizers & Sponsors</h2>
              <p className="text-center text-gray-300 mb-10">
                HackSky is a collaborative effort between 
                industry leaders and academic institutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center">
                  <div className="h-24 bg-cyber-darker rounded-md flex items-center justify-center border border-cyber-green/20 mb-4">
                    <span className="text-xl font-bold text-cyber-green">ACM MIT-BLR</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">ACM MIT-BLR Chapter</h3>
                  <p className="text-gray-400">
                    The Association for Computing Machinery student chapter at MIT-BLR, dedicated to 
                    advancing computing as a science and profession.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="h-24 bg-cyber-darker rounded-md flex items-center justify-center border border-cyber-green/20 mb-4">
                    <span className="text-xl font-bold text-cyber-red">Kaspersky</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Kaspersky</h3>
                  <p className="text-gray-400">
                    A global cybersecurity company providing leading-edge security solutions and services 
                    to protect businesses, critical infrastructure, and individuals worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
