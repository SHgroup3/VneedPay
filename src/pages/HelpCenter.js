import React, { useState } from 'react';

import { ChevronDown, ChevronUp } from 'lucide-react'; 

const faqData = [
    {
        question: "what does Privacy means?",
        answer: [ "When we say privacy, we’re talking about how your personal information is collected, used, stored, shared, and managed by Vneed Pay. We’re also talking about your rights to control what happens to your information."]
    },
    {
        question: "What data does Vneed Pay collect?",
        answer: [ "Basic identifying information like your full name, physical address, email address, phone number, and date of birth.",
            "Payment information like your bank account details or card number.",
            "Geolocation data like information about the location of your device."
 ] },
    {
        question: "How does Vneed Pay use personal information?",
        answer: [ "Provide our services, including to process your transfer, maintain and manage your profile, and process payments.",
            "Communicate with you to provide customer service, respond to your requests and feedback, and keep you updated.",
            "Follow laws and regulations, including consumer protection requirements, anti-money laundering requirements, and rules about investigating risk, fraud, and complaints."
        ]
    },
    {
        question: "What are my privacy rights?",
        answer: [ "Data privacy rights vary based on the laws and regulations in your region. Here’s what you need to know about how to control your personal information.",
            "You may save, copy, or transfer your personal data.",
            "You may access, review, update, and request to change your personal data.",
            "You may request to delete your personal data."
        ]
    },
    {
        question: "How do I submit a Privacy Request?",
        answer: [ "To exercise your privacy rights, we recommend that you follow the self-service steps in this article.",
            "If you need help or can't take an action yourself, send a request via email to privacy@VneedPay.com. Please send your message from the email address you used to sign up for Vneed pay — this will help us process your request.",
             "If you’d prefer not to send an email, call us or chat with us to get help."]
    },
    {
        question: "How does Vneed Pay handle privacy requests?",
        answer: [ "It will be reviewed by a member of our specialized team who has been trained to handle sensitive data.",
"We may need to reach out to you to verify your identity before we can make changes to your data or provide any information.",
"We aim to complete your privacy request within 30 days. Some requests may take longer to process. In some cases, we may not be able to complete your request. If that is the case, we will communicate with you to explain the issue."
]
    },
    {
        question: "I have a question that isn't answer here. How do can I get help?",
        answer: [ "Please read the complete Privacy Policy to learn more about how we collect, store, share, use, and manage your data.If you need more assistance, contact us. We’d be happy to help."]
    },
];


// Inline SVG for Chat Icon (Message Circle)
const ChatIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

// Inline SVG for Phone Icon
const PhoneIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l.66-.66a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const SearchIcon = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);


const HelpCenter = () => {
  const [searchTerm, setSearchTerm] = useState('');
      const [openIndex, setOpenIndex] = useState(null);
  
      // Function to toggle the open/close state of an FAQ item
      const toggleFAQ = (index) => {
          setOpenIndex(openIndex === index ? null : index);
      };

  // Placeholder content based on the image provided
  const articleTitle = "How does privacy work at Vneed Pay?";
  const articleIntro = "Use this article to learn about what personal information we collect from customers, how we use it, and what privacy rights and choices you have.";
  const articleLegalNote = "This page is meant to help you find answers to common privacy questions. For the complete details of how we collect, store, protect, use, and share your information – and a full list of your rights – please read our ";
  
  // Placeholder function for handling contact methods
  const handleContactClick = (method) => {
    console.log(`User clicked to contact via: ${method}`);
  };
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      
      {/* Main Content Container - Responsive Padding */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        
        {/* Help Center Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 sm:mb-8">
          Help Center
        </h1>

        {/* Search Bar Section */}
        <div className="mb-10 md:mb-16">
          <p className="text-gray-600 mb-3 text-lg">Search for your question</p>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-gray-800 border-2 border-gray-300 focus:border-teal-500 focus:ring-teal-500 rounded-xl transition duration-300 shadow-sm text-base md:text-lg outline-none"
              aria-label="Search help center questions"
            />
            <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>
        </div>

        {/* Article Section */}
        <article className="space-y-6">
          
          {/* Article Main Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            {articleTitle}
          </h2>

          {/* Article Introductory Paragraphs */}
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            {articleIntro}
          </p>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            {articleLegalNote}
            <a 
              href="#privacy-policy" 
              className="text-teal-600 font-semibold hover:text-teal-700 underline transition duration-200"
              onClick={(e) => {
                e.preventDefault(); // Prevent actual navigation for this placeholder
                console.log("Navigating to Privacy Policy...");
              }}
            >
              Privacy Policy
            </a>
            .
          </p>

          {/* "In this article" Section Header */}
          <div className="pt-4 md:pt-6">
            <h3 className="text-xl font-bold text-gray-900 border-b-2 border-teal-500 inline-block pb-1">
              In this article
            </h3>
            {/* FAQ Items (Accordion) */}
                            <div className="border-t border-gray-200">
                                {faqData.map((item, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
          >
            <span className="text-extrabold text-2xl sm:text-lg font-medium text-gray-700 hover:text-blue-600">
              {item.question}
            </span>
            <span className="text-gray-500">
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </span>
          </button>
                                        {/* Answer (Collapsible Content) */}
                                          {openIndex === index && (
            <div className="pb-4 pt-0">
              <ul className="pl-6 list-disc">
                {item.answer.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="text-medium text-gray-600 leading-relaxed"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
          </div>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 text-center">
        
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 md:mb-12">
          Can't find what you're looking for?
        </h2>
        
        {/* Language Dropdown */}
        <div className="flex justify-center items-center mb-10 md:mb-16 text-lg">
          <p className="text-gray-600 mr-4">Get help 24/7 in</p>
          <select 
            className="border border-gray-300 rounded-full px-4 py-2 text-gray-800 font-semibold focus:ring-teal-500 focus:border-teal-500 transition duration-200 cursor-pointer"
            defaultValue="English"
            aria-label="Select support language"
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
          </select>
        </div>

        {/* Chat and Phone Contact Options (Responsive Grid) */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-6 w-full max-w-sm sm:max-w-md">
            
            {/* Chat Button */}
            <button 
              onClick={() => handleContactClick('Chat')}
              className="flex flex-col items-center justify-center p-4 sm:p-6 border-2 border-gray-300 rounded-xl hover:border-teal-600 hover:shadow-lg transition duration-300 bg-white"
            >
              <ChatIcon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 mb-2" />
              <span className="text-base sm:text-lg font-medium text-gray-800">Chat</span>
            </button>
            
            {/* Phone Button */}
            <button
              onClick={() => handleContactClick('Phone')}
              className="flex flex-col items-center justify-center p-4 sm:p-6 border-2 border-gray-300 rounded-xl hover:border-teal-600 hover:shadow-lg transition duration-300 bg-white"
            >
              <PhoneIcon className="h-8 w-8 sm:h-10 sm:w-10 text-gray-700 mb-2" />
              <span className="text-base sm:text-lg font-medium text-gray-800">Phone</span>
            </button>
            
          </div>
        </div>
      </section>
        <section className="bg-teal-50 w-full border-t border-b border-teal-200">
        {/* Inner Content Container */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10 text-center">
          
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
            Privacy and security
          </h3>
          
          <p className="text-gray-700 text-base sm:text-lg mb-3 leading-relaxed">
            If you think you've been scammed or someone used your profile without your permission, 
            <a 
              href="#help-scam" 
              className="text-teal-600 font-semibold hover:text-teal-700 underline ml-1"
              onClick={(e) => e.preventDefault()}
            >
              we're here to help.
            </a>
          </p>
          
          <p className="text-gray-700 text-base sm:text-lg mb-3 leading-relaxed">
            If you're not happy with our service, you may file a 
            <a 
              href="#complaint" 
              className="text-teal-600 font-semibold hover:text-teal-700 underline mx-1"
              onClick={(e) => e.preventDefault()}
            >
              complaint or error report.
            </a>
          </p>
          
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            By using our chat and other contact methods, you agree to the terms of our 
            <a 
              href="#privacy-policy" 
              className="text-teal-600 font-semibold hover:text-teal-700 underline mx-1"
              onClick={(e) => e.preventDefault()}
            >
              Privacy Policy.
            </a>
          </p>
          
        </div>
      </section>
     
          
        </article>
        
        
      </main>
      
      {/* Simple Footer Placeholder to show bottom boundary */}
      <footer className="bg-gray-200 text-center text-gray-600 p-4 mt-12">
        {/* Footer content would typically go here */}
      </footer>
      
    </div>
  );
};

export default HelpCenter;
