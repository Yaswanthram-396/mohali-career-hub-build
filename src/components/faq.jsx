
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import './faq.css';

const FAQSection = () => {
  const faqs = [
    {
      question: "What services does EarlyJobs Mohali offer?",
      answer: "EarlyJobs Mohali provides comprehensive recruitment services including job placement for IT, biotech, and manufacturing sectors, career guidance, resume building, skill development workshops, and direct connections with local employers."
    },
    {
      question: "How can students register with EarlyJobs Mohali?",
      answer: "Students can register through our online portal by filling out the registration form with their details, uploading their resume, and selecting their preferred job categories. Our team will then contact them within 24 hours."
    },
    {
      question: "What types of companies partner with EarlyJobs Mohali?",
      answer: "We partner with leading companies in IT, biotechnology, manufacturing, logistics, and sales sectors across Mohali and the Tricity area. Our partners range from startups to established multinational corporations."
    },
    {
      question: "Is there any fee for job placement services?",
      answer: "No, our job placement services are completely free for job seekers. We operate on a employer-paid model where companies pay us for successful placements, ensuring no cost to candidates."
    },
    {
      question: "How long does the placement process typically take?",
      answer: "The placement process typically takes 1-4 weeks depending on your profile, requirements, and available opportunities. We ensure quality matches rather than rushing the process."
    },
    {
      question: "Do you provide support for freshers and experienced professionals?",
      answer: "Yes, we cater to both freshers looking for their first job and experienced professionals seeking career advancement. Our services are tailored to meet the specific needs of each candidate segment."
    }
  ];

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <Badge variant="outline" className="faq-badge">Frequently Asked Questions</Badge>
          <h2 className="faq-title">
            Got <span className="text-gradient">Questions?</span>
          </h2>
          <p className="faq-description">
            Find answers to common questions about our services and how we can help you achieve your career goals.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="faq-accordion">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
