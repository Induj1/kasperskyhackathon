
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TimelineEvent from '@/components/TimelineEvent';

const Schedule = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">Event Schedule</h1>
              <p className="text-xl text-gray-300 text-center mb-12">
                Explore the complete timeline of the Kaspersky Cybersecurity Hackathon.
              </p>
              
              <Tabs defaultValue="day1" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="day1">Day 1 (Oct 15)</TabsTrigger>
                  <TabsTrigger value="day2">Day 2 (Oct 16)</TabsTrigger>
                </TabsList>
                
                <TabsContent value="day1" className="space-y-6">
                  <div className="relative pl-4 border-l-2 border-cyber-green/50 mask-fade-out">
                    <TimelineEvent
                      time="09:00 - 10:00"
                      title="Registration & Breakfast"
                      description="Check-in, get your badges, and enjoy a light breakfast while networking with other participants."
                      eventType="break"
                      location="Main Hall"
                    />
                    
                    <TimelineEvent
                      time="10:00 - 10:30"
                      title="Opening Ceremony"
                      description="Welcome address from ACM MIT-BLR representatives and Kaspersky executives."
                      eventType="talk"
                      speaker="Dr. Amit Kumar & Sarah Johnson"
                      location="Auditorium"
                    />
                    
                    <TimelineEvent
                      time="10:30 - 11:30"
                      title="Keynote: The Future of AI in Cybersecurity"
                      description="An insightful talk on how AI is transforming the cybersecurity landscape and the challenges ahead."
                      eventType="talk"
                      speaker="Eugene Kaspersky (CEO, Kaspersky)"
                      location="Auditorium"
                    />
                    
                    <TimelineEvent
                      time="11:30 - 12:30"
                      title="Problem Statement Reveal"
                      description="Detailed explanation of the hackathon challenges across all tracks."
                      eventType="activity"
                      speaker="Technical Committee"
                      location="Auditorium"
                    />
                    
                    <TimelineEvent
                      time="12:30 - 13:30"
                      title="Lunch Break"
                      description="Networking lunch provided for all participants."
                      eventType="break"
                      location="Dining Area"
                    />
                    
                    <TimelineEvent
                      time="13:30 - 15:00"
                      title="Workshop: Advanced Threat Detection"
                      description="Learn how to use Kaspersky's Threat Intelligence Portal and other tools for detecting sophisticated threats."
                      eventType="workshop"
                      speaker="Maria Petrova (Security Researcher, Kaspersky)"
                      location="Workshop Room A"
                    />
                    
                    <TimelineEvent
                      time="15:00 - 16:30"
                      title="Workshop: Secure Coding Practices"
                      description="Hands-on session on writing secure code and identifying vulnerabilities early in the development cycle."
                      eventType="workshop"
                      speaker="Alex Chen (Senior Developer, Kaspersky)"
                      location="Workshop Room B"
                    />
                    
                    <TimelineEvent
                      time="16:30 - 17:00"
                      title="Coffee Break"
                      description="Refresh with coffee and snacks."
                      eventType="break"
                      location="Lounge Area"
                    />
                    
                    <TimelineEvent
                      time="17:00 - 18:00"
                      title="Team Formation & Ideation"
                      description="For participants who haven't formed teams yet, this is an opportunity to find team members and brainstorm ideas."
                      eventType="activity"
                      location="Main Hall"
                    />
                    
                    <TimelineEvent
                      time="18:00 - 19:00"
                      title="Dinner"
                      description="Dinner provided for all participants."
                      eventType="break"
                      location="Dining Area"
                    />
                    
                    <TimelineEvent
                      time="19:00 - 00:00"
                      title="Hacking Begins"
                      description="The official start of the coding marathon. Mentors will be available for guidance."
                      eventType="activity"
                      location="Hacking Zone"
                    />
                  </div>
                </TabsContent>
                
                <TabsContent value="day2" className="space-y-6">
                  <div className="relative pl-4 border-l-2 border-cyber-green/50 mask-fade-out">
                    <TimelineEvent
                      time="00:00 - 09:00"
                      title="Overnight Hacking"
                      description="Continue working on your projects through the night. Snacks and refreshments available."
                      eventType="activity"
                      location="Hacking Zone"
                    />
                    
                    <TimelineEvent
                      time="09:00 - 10:00"
                      title="Breakfast"
                      description="Breakfast provided for all participants."
                      eventType="break"
                      location="Dining Area"
                    />
                    
                    <TimelineEvent
                      time="10:00 - 12:00"
                      title="Mid-way Check-in"
                      description="Teams present their progress to mentors for feedback and guidance."
                      eventType="judging"
                      location="Meeting Rooms"
                    />
                    
                    <TimelineEvent
                      time="12:00 - 13:00"
                      title="Lightning Talk: Ethical Hacking"
                      description="A quick session on the importance of ethical considerations in cybersecurity."
                      eventType="talk"
                      speaker="Raj Patel (Ethical Hacker, CyberSafe)"
                      location="Auditorium"
                    />
                    
                    <TimelineEvent
                      time="13:00 - 14:00"
                      title="Lunch Break"
                      description="Lunch provided for all participants."
                      eventType="break"
                      location="Dining Area"
                    />
                    
                    <TimelineEvent
                      time="14:00 - 18:00"
                      title="Final Stretch Hacking"
                      description="Last few hours to complete your projects. Technical support available."
                      eventType="activity"
                      location="Hacking Zone"
                    />
                    
                    <TimelineEvent
                      time="18:00 - 19:00"
                      title="Submission Deadline & Dinner"
                      description="All projects must be submitted by 18:00. Dinner provided while judges review submissions."
                      eventType="break"
                      location="Dining Area"
                    />
                    
                    <TimelineEvent
                      time="19:00 - 21:00"
                      title="Project Presentations"
                      description="Top 10 teams present their solutions to judges and audience."
                      eventType="judging"
                      location="Auditorium"
                    />
                    
                    <TimelineEvent
                      time="21:00 - 21:30"
                      title="Judges Deliberation"
                      description="Judges finalize their decisions while participants network."
                      eventType="break"
                      location="Lounge Area"
                    />
                    
                    <TimelineEvent
                      time="21:30 - 22:30"
                      title="Awards Ceremony & Closing"
                      description="Announcement of winners, prize distribution, and closing remarks."
                      eventType="activity"
                      speaker="Dr. Amit Kumar & Eugene Kaspersky"
                      location="Auditorium"
                    />
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="mt-12 p-6 bg-cyber-darker rounded-md border border-cyber-green/20">
                <h3 className="text-xl font-bold mb-4">Important Notes</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Schedule is subject to minor changes. Any updates will be announced through the event app and email.</li>
                  <li>All workshops and talks will be recorded and made available to participants after the event.</li>
                  <li>Technical support will be available 24/7 during the hackathon.</li>
                  <li>Participants must be present during the project presentations to be eligible for prizes.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
