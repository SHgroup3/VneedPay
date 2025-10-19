import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react'; 

// Temporary placeholder arrays
const cadAmounts = [100, 250, 500, 1000, 2000];
const pkrAmounts = [20000, 40000, 60000, 80000, 100000];

// Simple reusable button component
const ConversionButton = ({ amount, currency, isReceive }) => (
  <button
    className={`px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-teal-600 hover:text-white transition`}
  >
    {isReceive ? `${amount.toLocaleString()} ${currency}` : `${amount} ${currency}`}
  </button>
);



const Step = ({ number, children }) => (
  <div className="flex items-start mb-6 last:mb-0">
    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-teal-500 text-white font-bold text-sm mr-4">
      {number}
    </div>
    <p className="text-gray-700 text-base leading-relaxed">{children}</p>
  </div>
);

const faqData = [
    {
        question: "How much does it cost to send money to Pakistan?",
        answer: "The cost of sending money varies based on the transfer speed and payment method. You will see the exact fees and exchange rate before confirming your transfer."
    },
    {
        question: "Does Vneed Pay offer discounts for new customers?",
        answer: "Yes, new customers often receive a special promotional exchange rate on their first transfer."
    },
    {
        question: "How can I pay for my money transfer?",
        answer: "You can typically pay using your bank account, credit card, or debit card."
    },
    {
        question: "What are the ways to receive a money transfer?",
        answer: "Recipients can receive money via bank deposit, cash pickup at partner locations, or mobile wallet."
    },
    {
        question: "Is it safe to send money online with Vneed Pay?",
        answer: "Vneed Pay uses industry-standard security measures and encryption to protect your money and personal data."
    },
    {
        question: "How do I track my money transfer?",
        answer: "You can track the status of your transfer in real-time through the Vneed Pay app or website."
    },
    {
        question: "What are the money transfer limits?",
        answer: "Transfer limits depend on your country, verification level, and the recipient country. You can check your current limits in your account settings."
    },
    {
        question: "How do I contact Vneed Pay customer service?",
        answer: "Customer service can be reached via phone, chat, or email, available 24/7."
    },
];



const RateAndFee = () => {
    // State to manage which FAQ item is currently open
    const [openIndex, setOpenIndex] = useState(null);

    // Function to toggle the open/close state of an FAQ item
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <div className="min-h-screen bg-white font-sans">
        <div className="bg-yellow-100 text-center p-3 rounded-lg text-sm mb-8 font-semibold">
              Get zero fees on transfers of 58,000 PKR or more, every time.
            </div>
      
      {/* --- Main Content Area --- */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      
        
        <div className="flex flex-col md:flex-row md:space-x-8">
              
          
          {/* --- Left Promotional Content Section (Text/Offer) --- */}
          <div className="flex-1 order-2 md:order-1 mt-8 md:mt-0 max-w-full md:max-w-3xl">
          
            
            <div className="p-6">
              <div className="inline-block bg-purple-300 text-purple-800 text-xs font-semibold px-4 py-2 rounded-full mb-6 text-center">
                New customer offer
              </div>
              <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                CAD to PKR
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Vneed Pay offers dependable exchange rates for <span className="font-bold">CAD to PKR</span> with no hidden fees. Join today and get a promotional rate of <span className="font-bold">204.63 PKR to 1 CAD</span> on your first money transfer.
              </p>
              {/* Image would go here for a richer component */}
              <div className="mt-6 text-gray-400 italic">
                              </div>
            </div>
          </div>
          
          

          <div className="w-full md:w-96 order-1 md:order-2">
            <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
              
              <h2 className="sr-only">Currency Converter</h2>
              
              {/* Send/Receive Fields */}
              <div className="space-y-4">
                <div className="border border-gray-300 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">You send</p>
                  <div className="flex justify-between items-center">
                    <input 
                      type="number" 
                      defaultValue="100.00" 
                      className="text-2xl font-semibold w-full focus:outline-none"
                    />
                    <span className="text-xl font-medium text-gray-700">
                     <img
                  src="https://flagcdn.com/w40/ca.png"
                  alt="Canada"
                  className="w-6 h-6 rounded-full object-cover"
                />
                        CAD</span>
                  </div>
                </div>

                <div className="border border-green-500 bg-green-50 rounded-lg p-3">
                  <p className="text-sm text-gray-500 mb-1">They receive</p>
                  <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-green-700">20,463.00</p>
                    <span className="text-xl font-medium text-gray-700">
                        <img
                  src="https://flagcdn.com/w40/pk.png"
                  alt="Pakistan"
                  className="w-6 h-6 rounded-full object-cover"
                />
                        PKR</span>
                  </div>
                </div>
              </div>
              
              <hr className="my-6 border-gray-200" />
              
              {/* Rate and Cost Details */}
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Special rate</span>
                  <span className="font-medium">1 CAD = 204.63 PKR</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Fee</span>
                  <span className="font-medium text-red-600">0.99 CAD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Discount</span>
                  <span className="font-medium text-green-600">-0.99 CAD</span>
                </div>
                <div className="flex justify-between pt-2 border-t mt-2">
                  <span className="text-base font-bold">Total cost</span>
                  <span className="text-base font-bold">100.00 CAD</span>
                </div>
              </div>

              {/* Action Button */}
              <button className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition duration-150 shadow-lg">
                Get this rate
              </button>
              
              {/* Bank Logos */}
              <div className="mt-6 text-center text-xs text-gray-400">
                <p>Available Banks:</p>
                <div className="flex justify-center items-center space-x-4 mt-2">
                  <img src='https://cdn.remitly.com/images/v1/img/united_bank_limited_ubl_thu_aug_.UY3qRzCzQb2hyrpw.png'
                  alt='UBL'
                  className='w-14 h-14'/>
                  <img src='https://cdn.remitly.com/images/v1/img/meezan_bank_tue_aug_22_2023.aWd1iKZUz5g1PedZ.svg'
                  alt='Meezan Bank'
                  className='w-15 h-12'/>
                  <img src='https://cdn.remitly.com/images/v1/img/allied_bank_thu_aug_24_2023.roZVCDiHzB3wGEpR.svg'
                  alt='Allied Bank'
                  className='w-15 h-12'/>
                </div>
                <p className="mt-2 text-sm text-black">and more</p>
              </div>

            </div>
          </div>
          
        </div>
        <p className='text-sm mt-5 font-semibold'> 
Any FX rate shown applies when you pay by Bank account or Interac e-Transfer. New customers only. One per customer. Limited time offer. Any rates shown are subject</p> 
<p className='text-center text-sm font-semibold'>to change. Promotional FX rate applies to first CAD 2,000.00 sent. See Terms and Conditions for details.</p>
      </main>

              <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-100 text-gray-700">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-2">
              What affects the exchange rate for Canadian dollars to Pakistani rupees?
            </h2>
          </div>
          
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ml-16 mr-16">
            
            {/* Box 1: Control Banks */}
            <div className="text-center p-4 text-base">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Central Banks</h3>
              <p className="text-black-600">
                The interest rates set by a country's central bank can impact the value of its currency, impacting currency demand.
              </p>
            </div>

            {/* Box 2: Economic Performance */}
            <div className="text-center p-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Economic performance</h3>
              <p className="text-base text-black-600">
                A robust economy can bolster a currency's value.
              </p>
            </div>
            
            {/* Box 3: Political stability */}
            <div className="text-center p-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Political stability</h3>
              <p className="text-base text-black-600">
                Stable governments can foster strong currencies.
              </p>
            </div>
            
            {/* Box 4: Inflation rates */}
            <div className="text-center p-4">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Inflation rates</h3>
              <p className="text-base text-black-600">
                Lower inflation can lead to a stronger currency, while higher inflation can weaken it.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-50 md:px-12 lg:px-64">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Why choose Vneed Pay?
            </h2>
          </div>
          
          {/* Responsive Grid Layout with Icons */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4"> 
            {/* Change: Grid ko aur responsive banaya gaya hai.
                - grid-cols-1: Mobile (default) par ek-ek item column mein.
                - sm:grid-cols-2: Small screens (jaise bade phones/tablet) par do items.
                - md:grid-cols-4: Tablet/Desktop par chaar items.
            */}
            
            {/* Feature 1: Guaranteed Delivery */}
            <div className="text-center p-4">
              <div className="text-4xl text-green-600 mb-4">✔</div> {/* Placeholder Icon */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Guaranteed Delivery</h3>
              <p className="text-sm text-gray-600">
                Rest easy knowing your transfers will be delivered on time, or we'll refund your fees.
              </p>
            </div>

            {/* Feature 2: Secure Transactions */}
            <div className="text-center p-4">
              <div className="text-4xl text-blue-600 mb-4">🔒</div> {/* Placeholder Icon */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Transactions</h3>
              <p className="text-sm text-gray-600">
                Send money home with security designed to keep your money and personal data safe.
              </p>
            </div>
            
            {/* Feature 3: Global Network */}
            <div className="text-center p-4">
              <div className="text-4xl text-yellow-600 mb-4">🌎</div> {/* Placeholder Icon */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
              <p className="text-sm text-gray-600">
                Choose what works for you from a growing network of banks, cash pickup and more locations.
              </p>
            </div>
            
            {/* Feature 4: Trusted Worldwide */}
            <div className="text-center p-4">
              <div className="text-4xl text-red-600 mb-4">🤝</div> {/* Placeholder Icon */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted Worldwide</h3>
              <p className="text-sm text-gray-600">
                Join millions from across the globe who trust Vneed pay for sending money home.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Download the App Section (Dark Background)
          - Uses flexbox for alignment: flex-col on mobile, flex-row on larger screens.
        */}
       <section className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row justify-between items-center max-w-5xl mx-auto">
        
        {/* Left/Top Content (Download info) */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Download the app:</h3>
            
            {/* CHANGE: Mobile-First: Column stack, Medium screen: row */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                {/* Placeholder App Store Buttons */}
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm w-4/5 sm:w-auto mx-auto sm:mx-0">
                    Get it on <span className="font-bold">Google Play</span>
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg text-sm w-4/5 sm:w-auto mx-auto sm:mx-0">
                    Download on the <span className="font-bold">App Store</span>
                </button>
            </div>
            
            {/* QR Code Placeholder */}
            <div className="flex flex-col items-center lg:items-start">
                <div className="bg-white p-2 inline-block rounded-md mt-4"> {/* QR Code image */}
                    <img 
                        src='https://cdn.remitly.com/images/v1/img/qr_code_tue_feb_06_2024.bD56TI2smTyVsGd5.png'
                        alt='QRcode'
                        className='h-20 w-20'
                    />
                </div>
                <p className="text-sm mt-2">Scan the code with your phone to get the app.</p>
            </div>
        </div>

        {/* Right/Bottom Content (Tagline) */}
        <div className="lg:w-1/2 text-center lg:text-right">
            {/* CHANGE: Font size adjusted for better scaling */}
            <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mt-6 lg:mt-0">
                Fast. Easy. <br/> Reliable.
            </p>
        </div>
    </div>
</section>

        {/* 4. How to convert Section (Simplified Placeholder)
        */}
       <section className="bg-blue-50 py-12 px-6 rounded-xl shadow-lg mb-16 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-700 mb-10">
        How to convert CAD to PKR
    </h2>

    {/* Responsive Layout for Steps and Image */}
    {/* CHANGE: Fixed margins (ml-64 mr-64) removed. max-w-4xl added for content width */}
    <div className="flex flex-col md:flex-row items-center md:space-x-12 max-w-4xl mx-auto">
        
        {/* Left Side: Steps */}
        <div className="w-full md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
            <div className="space-y-4">
                <Step number={1}>
                    Create an account using your email address through our **website** or our app on the <a href="#" className="text-teal-600 hover:underline font-semibold">App Store</a> or <a href="#" className="text-teal-600 hover:underline font-semibold">Google Play</a>.
                </Step>
                <Step number={2}>
                    Select the currency, the amount you want to send, and the delivery speed.
                </Step>
                <Step number={3}>
                    Choose how your money is delivered.
                </Step>
                <Step number={4}>
                    Enter the name and information of the person who will receive the money.
                </Step>
                <Step number={5}>
                    Enter your payment information and select **confirm transfer** to send.
                </Step>
            </div>
        </div>

        {/* Right Side: Illustration */}
        <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center items-center">
            {/* Placeholder for the illustration/diagram */}
            {/* CHANGE: Added responsive classes for the image container */}
            <div className="w-full h-auto max-w-xs md:max-w-none flex items-center justify-center">
                <span>
                    <img 
                        src='https://media.remitly.io/coin_currency_sun_jun_29_2025.kdrBAroZQQmMuN54.svg'
                        alt='CDR'
                        className='w-full h-auto' // Ensures image scales with container
                    />
                </span>
            </div>
        </div>
    </div>
</section>

      {/* 2. Partner Logos Section */}
    <section className="text-center mb-16 bg-white py-8 px-4 sm:px-6"> 
    <h2 className="text-xl font-bold text-gray-900 mb-6">
        Where to send Pakistani rupees in Pakistan?
    </h2>
    <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
        Vneed Pay gives you options when sending money to Pakistan. Depending on your recipient's location, choose from trusted banks, cash pickup, bank deposit, mobile wallet, and more delivery options.
    </p>

    {/* Logos Grid: Flexible grid for responsiveness */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 items-center justify-center max-w-5xl mx-auto">
        {/* Placeholder Logos (Main changes in img classes) */}
        <img 
            src='https://cdn.remitly.com/images/v1/img/mebl_mon_jan_06_2025.TIp0X01UDzAo2MnS.png'
            alt='Meezan Bank'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
        <img 
            src='https://cdn.remitly.com/images/v1/img/easypaisa_logo_wed_jan_25_2023.02DZRiKVFe7OYnUw.png'
            alt='EasyPaisa'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/united_bank_limited1x_tue_jun_05.2Ro0fQ6RA52cQez7rK9WDV.png'
            alt='UBL'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/dollar_east_thu_sep_18_2025.DOzd14yEZXwxmZJV.jpg'
            alt='DollarCast'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/jazzcashlogo_wed_jan_25_2023.jshl7lHJrtfw8vNS.jpg'
            alt='HBL'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/image_1_tue_jan_31_2023.3lsXL2Qo4cx2eYHD.png'
            alt='Jazzcas'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
        <img 
            src='https://cdn.remitly.com/images/v1/img/paragon_exchange_thu_sep_18_2025.beKod6o93rAHhzTe.png'
            alt='exchange'
            className='w-full h-auto' // CHANGE: Added w-full h-auto
        />
    </div>
</section>
 
 
{/* 3. Get Help Section */}
<section className="text-center py-6 px-4"> 
    <h3 className="text-2xl font-bold text-gray-900">
        Get help with sending CAD to PKR
    </h3>
    {/* Placeholder for a link or button to the help page */}
</section>

<section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-4xl mx-auto">
                
                {/* Section Title */}
                <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
                    Vneed Pay FAQ
                </h2>

                {/* FAQ Items (Accordion) */}
                <div className="border-t border-gray-200">
                    {faqData.map((item, index) => (
                        <div key={index} className="border-b border-gray-200">
                            
                            {/* Question (Clickable Header) */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                            >
                                <span className="text-base sm:text-lg font-medium text-gray-700 hover:text-blue-600">
                                    {item.question}
                                </span>
                                {/* Icon that changes based on state */}
                                <span className="text-gray-500">
                                    {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                                </span>
                            </button>

                            {/* Answer (Collapsible Content) */}
                            {openIndex === index && (
                                <div className="pb-4 pt-0">
                                    <p className="text-sm text-gray-600 pl-4 pr-10 leading-relaxed">
                                        {item.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA (As seen in the screenshot) */}
                <div className="mt-20 text-center">
                    <p className="text-2xl font-bold text-gray-800 mb-2">
                        Reliable money transfers when sending from Canada to Pakistan
                    </p>
                    <p className="text-sm text-gray-500 mb-6">
                        Send and receive money with speed you can rely on.
                    </p>
                    <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg">
                        Send money
                    </button>
                </div>

            </div>
        </section>
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            
            {/* --- 1. CAD Conversion Rates Section --- */}
            <div className="mb-12">
                <div className="text-center mb-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        CAD conversion rates
                    </h2>
                </div>

                {/* Buttons Container: Key to Responsiveness */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-6xl mx-auto">
                    {/* flex-wrap: Jab screen choti hogi, toh buttons agle line mein chale jayenge. */}
                    {/* gap-3/gap-4: Buttons ke beech mein thodi space maintain karega. */}
                    
                    {cadAmounts.map((amount) => (
                        <ConversionButton 
                            key={amount} 
                            amount={amount} 
                            currency="CAD" 
                        />
                    ))}
                </div>
            </div>

            {/* --- 2. PKR Conversion Rates Section --- */}
            <div>
                <div className="text-center mb-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        PKR conversion rates
                    </h2>
                </div>

                {/* Buttons Container: Key to Responsiveness */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-6xl mx-auto">
                    
                    {pkrAmounts.map((amount) => (
                        <ConversionButton 
                            key={amount} 
                            amount={amount} 
                            currency="PKR" 
                            isReceive={true}
                        />
                    ))}
                </div>
            </div>
            
        </section>

    </div>
  );
};

export default RateAndFee;