
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQItem from '@/components/FAQItem';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const FAQ = () => {
  const generalFaqs = [
    {
      question: "What is the Kaspersky Cybersecurity Hackathon?",
      answer: "The Kaspersky Cybersecurity Hackathon is a 48-hour competition organized by ACM MIT-BLR in collaboration with Kaspersky. Participants work in teams to develop innovative solutions to real-world cybersecurity challenges.",
      value: "general-1"
    },
    {
      question: "When and where will the hackathon take place?",
      answer: "The hackathon will take place on October 15-16, 2023. It will be conducted online with live streaming of keynotes and presentations.",
      value: "general-2"
    },
    {
      question: "Who can participate in the hackathon?",
      answer: "The hackathon is open to students, professionals, and cybersecurity enthusiasts. Participants must be at least 18 years old or have guardian permission if younger.",
      value: "general-3"
    },
    {
      question: "Is there a registration fee?",
      answer: "No, participation in the hackathon is completely free, thanks to our sponsors.",
      value: "general-4"
    }
  ];

  const teamFaqs = [
    {
      question: "How many members can be in a team?",
      answer: "Each team should have 2-4 members. We encourage diverse teams with complementary skills.",
      value: "team-1"
    },
    {
      question: "Can I participate individually?",
      answer: "Yes, you can register as an individual. We'll try to match you with other individual participants to form a team if you choose that option during registration.",
      value: "team-2"
    },
    {
      question: "Can team members be from different institutions?",
      answer: "Absolutely! Teams can include members from different institutions, companies, or countries.",
      value: "team-3"
    }
  ];

  const technicalFaqs = [
    {
      question: "What technologies can we use for our solution?",
      answer: "You can use any programming language, framework, or tool of your choice. However, your solution should be built during the hackathon (except for open-source libraries and frameworks).",
      value: "tech-1"
    },
    {
      question: "Will we have access to Kaspersky's APIs or tools?",
      answer: "Yes, Kaspersky will provide access to some of their APIs and tools for use during the hackathon. Details will be shared with registered participants prior to the event.",
      value: "tech-2"
    },
    {
      question: "Do we need to have cybersecurity knowledge to participate?",
      answer: "While basic knowledge of cybersecurity concepts is helpful, it's not mandatory. Teams with diverse skills (development, design, business) often create the most innovative solutions.",
      value: "tech-3"
    },
    {
      question: "Will there be technical support during the hackathon?",
      answer: "Yes, mentors and technical experts from Kaspersky and ACM MIT-BLR will be available throughout the hackathon to help with technical issues and provide guidance.",
      value: "tech-4"
    }
  ];

  const submissionFaqs = [
    {
      question: "What are the evaluation criteria?",
      answer: "Projects will be evaluated based on innovation, technical implementation, practicality, presentation, and relevance to the chosen track. The detailed judging criteria will be shared during the kickoff.",
      value: "submission-1"
    },
    {
      question: "What should be included in the final submission?",
      answer: "Your final submission should include the source code, a brief presentation (5 slides max), a demo video (3 minutes max), and documentation explaining your solution and how to run it.",
      value: "submission-2"
    },
    {
      question: "Do we retain the intellectual property rights to our project?",
      answer: "Yes, teams retain the intellectual property rights to their projects. However, by participating, you grant Kaspersky and ACM MIT-BLR the right to showcase your project for promotional purposes.",
      value: "submission-3"
    }
  ];

  const prizeFaqs = [
    {
      question: "What are the prizes for winning teams?",
      answer: "Each track has its own set of prizes: First place: $5,000, Second place: $3,000, Third place: $2,000. Additionally, there are special prizes for the most innovative solution, best technical implementation, and audience favorite.",
      value: "prize-1"
    },
    {
      question: "Are there any internship opportunities for participants?",
      answer: "Yes, Kaspersky will offer internship opportunities to selected participants based on their performance during the hackathon.",
      value: "prize-2"
    },
    {
      question: "Will all participants receive certificates?",
      answer: "Yes, all participants who submit a project will receive a digital certificate of participation. Winners will receive special certificates acknowledging their achievement.",
      value: "prize-3"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen binary-bg pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center glow-text">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-300 text-center mb-8">
                Find answers to common questions about the Kaspersky Cybersecurity Hackathon.
              </p>
              
              <div className="relative mb-12">
                <Input 
                  type="text" 
                  placeholder="Search for answers..." 
                  className="pl-10"
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-cyber-green">General Questions</h2>
                  <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                    {generalFaqs.map((faq) => (
                      <FAQItem 
                        key={faq.value}
                        question={faq.question}
                        answer={faq.answer}
                        value={faq.value}
                      />
                    ))}
                  </Accordion>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-cyber-green">Team & Registration</h2>
                  <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                    {teamFaqs.map((faq) => (
                      <FAQItem 
                        key={faq.value}
                        question={faq.question}
                        answer={faq.answer}
                        value={faq.value}
                      />
                    ))}
                  </Accordion>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-cyber-green">Technical Questions</h2>
                  <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                    {technicalFaqs.map((faq) => (
                      <FAQItem 
                        key={faq.value}
                        question={faq.question}
                        answer={faq.answer}
                        value={faq.value}
                      />
                    ))}
                  </Accordion>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-cyber-green">Submission & Judging</h2>
                  <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                    {submissionFaqs.map((faq) => (
                      <FAQItem 
                        key={faq.value}
                        question={faq.question}
                        answer={faq.answer}
                        value={faq.value}
                      />
                    ))}
                  </Accordion>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-cyber-green">Prizes & Recognition</h2>
                  <Accordion type="single" collapsible className="border border-cyber-green/20 rounded-md overflow-hidden">
                    {prizeFaqs.map((faq) => (
                      <FAQItem 
                        key={faq.value}
                        question={faq.question}
                        answer={faq.answer}
                        value={faq.value}
                      />
                    ))}
                  </Accordion>
                </div>
              </div>
              
              <div className="mt-16 p-6 bg-cyber-darker rounded-md border border-cyber-green/20 text-center">
                <h3 className="text-xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-gray-300 mb-6">
                  If you couldn't find the information you're looking for, please don't hesitate to contact us.
                </p>
                <Button asChild>
                  <a href="mailto:hackathon@acmmit.org">Contact Us</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
