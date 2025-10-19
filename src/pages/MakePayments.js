import React, {useState} from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

  const blogs = [
    {
      title: "How to Read a Business Cheque: A Step-by-Step Guide",
      image:
        "https://cdn.remitly.com/images/v1/img/pen_writing_check_tue_sep_16_202.irDCHZcupVOTRe0A.jpg",
      link: "#",
    },
    {
      title: "What is an Invoice? A Complete Guide for Your Business",
      image:
        "https://cdn.remitly.com/images/v1/img/pen_calculator_invoice_tue_sep_1.JaXSvHXGvVTnOkB3.jpg",
      link: "#",
    },
    {
      title: "7 Tips for Selling Online as a Small Business",
      image:
        "https://cdn.remitly.com/images/v1/img/online_shopping_cart_laptop_tue_.x7vagOltj9DAKaAH.jpg",
      link: "#",
    },
    {
      title:
        "How to Pay Virtual Assistants: A Complete Guide for Employers",
      image:
        "https://cdn.remitly.com/images/v1/img/virtual_assistant_photo_tue_sep_.GXHbe2Z7dgMlX5P3.jpg",
      link: "#",
    },
  ];

const faqs = [
  {
    question: "How do I sign up for a Vneed Pay Business account?",
    answer:
      "Sign up is easy–follow these steps to create your account: If you have a Vneed Pay personal account, make sure you've signed out.",
  },
  {
    question: "Who can use Vneed Pay for business payments?",
    answer:
      "Vneed Pay Business is designed for small and medium-sized companies that send payments to international partners, suppliers, or employees.",
  },
  {
    question: "What do I need to open a Vneed Pay Business account?",
    answer:
      "You’ll need valid business documents, identification, and banking information to verify your account.",
  },
  {
    question: "What do I get with a Vneed Pay Business account?",
    answer:
      "You get fast and secure cross-border payments, competitive exchange rates, and transparent fees.",
  },
  {
    question: "Is there a fee to open a Vneed Pay Business account?",
    answer:
      "No, opening a Vneed Pay Business account is completely free. Transaction fees depend on the transfer details.",
  },
  {
    question: "How much money can I send with a Vneed Pay Business account?",
    answer:
      "Transfer limits depend on your account verification level and destination country. Higher limits are available upon request.",
  },
  {
    question: "What are the ways to receive a money transfer?",
    answer:
      "Recipients can receive funds through bank deposits, cash pickups, or mobile wallets depending on their country.",
  },
];

const RemitlyBusinessContent = () => {

    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="min-h-screen flex-col bg-white flex items-center justify-center p-4 sm:p-6 lg:p-12 margin-0 p-0">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-10">
          <p className="text-lg font-medium text-green-700">Excellent</p>
          <div className="flex justify-center items-center space-x-1 mt-1">
            <span className="text-2xl text-green-500">★★★★★</span>
            <span className="text-gray-600">63,147 reviews on</span>
            <span className="font-bold text-gray-800">Trustpilot</span>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Simplify payments with <br className="hidden sm:inline" />
              <span className="text-teal-700">Vneed Pay Business</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg lg:max-w-none mx-auto lg:mx-0">
              Whether paying overseas teams, vendors, or invoices, Vneed Pay makes moving money fast and easy and is backed by dedicated support.
            </p>
            <p className="text-lg font-semibold text-gray-700 mb-8">
              Get a special promotion on your first transfer.
            </p>
            <button className="bg-teal-700 hover:bg-teal-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 text-lg">
              Create Vneed Pay Business account
            </button>
          </div>
          <div className="order-1 lg:order-2 mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <img 
                            src='https://cdn.remitly.com/images/v1/img/2x_hero_smb_slp_en.hBLJd8QW0nTwyCor.png'
                            alt='Remitly Business App Graphic'
                            className='w-full max-w-sm lg:max-w-lg h-auto object-contain'
                        />
                    </div>
        </div> 
      </div>
<div className="bg-pink-50 py-16 sm:py-24 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-12 sm:mb-20">
            Business payments on your terms
        </h2>

        {/* 4-Column Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col items-center p-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-orange-100 rounded-full flex items-center justify-center mb-4 text-3xl sm:text-4xl border border-gray-100 shadow-md ">
                    <span>
                      <img src='https://media.remitly.io/illustration_envelope_money_pers.8uAmoStpC6LQE7Eg.svg'
                      alt='payroll'/>
                    </span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-teal-900">International payroll</p>
            </div>

            <div className="flex flex-col items-center p-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-green-100 rounded-full flex items-center justify-center mb-4 text-3xl sm:text-4xl border border-gray-100 shadow-md">
                    <span> <img src='https://media.remitly.io/woman_dog_clock_illustration.u3LksoGr0VGhhX6K.svg'
                      alt='clock'/></span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-teal-900">Freelancer payouts</p>
            </div>

            <div className="flex flex-col items-center p-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl sm:text-4xl border border-gray-100 shadow-md">
                    <span> <img src='https://media.remitly.io/illustration_credit_cards.JsyUnpO1kMmKKnNM.svg'
                      alt='e-commerce'/></span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-teal-900">E-Commerce payments</p>
            </div>
            <div className="flex flex-col items-center p-4">
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-yellow-100 rounded-full flex items-center justify-center mb-4 text-3xl sm:text-4xl border border-gray-100 shadow-md">
                    <span> <img src='https://media.remitly.io/illustration_woman_checkmark_pho.NXOHowc1JppW5IQs.svg'
                      alt='phone'/></span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-teal-900">One-time payouts</p>
            </div>
        </div>
       
    </div>
</div>
<div className='items-center justify-center'>
   <h3 className="text-xl txt-center sm:text-2xl font-bold text-gray-700 mt-16 sm:mt-28 margin-0 p-0">
            Built for your business
        </h3>
        

</div>
 <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Section */}
            <div className="order-2 lg:order-1 text-center lg:text-left mb-12 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-600 mb-6">
                    No surprises, just transparent <br className="hidden sm:inline" /> pricing
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    No hidden fees. No confusing math. Just easy international business money transfers with competitive exchange rates.
                </p>
            </div>

            {/* Right Section */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                <img 
                    src='https://cdn.remitly.com/images/v1/img/2x_cad_woman_cafe_payment_comple.elf7PpZZ2uVcHCdK.png'
                    alt='Transparent Pricing and Payment Completed'
                    className='w-full max-w-sm lg:max-w-md h-auto object-contain rounded-xl shadow-lg'
                />
            </div>

        </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mt-12 lg:mt-20">
            
            {/* Left Section: Image*/}
            <div className="order-1 lg:order-1 flex justify-center lg:justify-end mb-12 lg:mb-0">
                <img 
                    src='https://cdn.remitly.com/images/v1/img/2x_man_business_account_setup.MNJPRQJslnMPjuW8.png'
                    alt='Transparent Pricing and Payment Completed'
                    className='w-full max-w-sm lg:max-w-md h-auto object-contain rounded-xl shadow-lg'
                />
            </div>

            {/* Right Section: Text Content */}
            <div className="order-2 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-6">
                    Trusted international business<br className="hidden sm:inline" />payments
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Join the millions who rely on Remitly-now offering secure internatioal business payments you can trust, everytime
                </p>
            </div>

        </div>   
       <div className='items-center justify-center'>
   <h3 className="text-xl txt-center sm:text-2xl font-bold text-gray-700 mt-16 sm:mt-28 margin-0 p-0">
         
        </h3>
        

</div>
 <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Left Section: Text Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left mb-12 lg:mb-0">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-6">
                    Payment recieve within an <br className="hidden sm:inline" /> hour
                </h2>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    No paperwork, no agents, no delays. Set up in minutes and send business payments internationally whenever you need.*
                </p>
            </div>

            {/* Right Section: Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                <img 
                    src='https://cdn.remitly.com/images/v1/img/2x_ca_people_ready_to_send_money.OMsBlJgwCS03RJsM.png'
                    alt='Transparent Pricing and Payment Completed'
                    className='w-full max-w-sm lg:max-w-md h-auto object-contain rounded-xl shadow-lg'
                />
            </div>

        </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center mt-12 lg:mt-20">
            <div className="order-1 lg:order-1 flex justify-center lg:justify-end mb-12 lg:mb-0"> 
                <img 
                    src='https://cdn.remitly.com/images/v1/img/2x_ca_business_payments_delivere.7VOr2hD4HnX5xLi4.png' 
                    alt='Transparent Pricing and Payment Completed'
                    className='w-full max-w-sm lg:max-w-md h-auto object-contain rounded-xl shadow-lg'
                />
            </div>
            <div className="order-2 lg:order-2 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-6">
                    On-time payments<br className="hidden sm:inline" />payments
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Pay contractors, employees, and vendors in 100+ currencies with guaranteed delivery or your fees refunded.
                </p>
            </div>

        </div>  
        <div className="bg-white text-center p-3 rounded-lg text-sm mb-8 font-semibold mt-12 lg:mt-20">
              *In some instances, additional paperwork may be required.
            </div>
                <section className="text-center mb-16 bg-white py-8 px-4 sm:px-6"> 
    <h1 className="text-4xl font-extrabold text-gray-700 mb-6">
        Transfer money to our providers
    </h1>
    <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
        Vneed Pay's global network includes 5 billion bank accounts, mobile wallets, and approximately 470,000 cash pickup options across the globe.
    </p>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-7 gap-6 items-center justify-center max-w-5xl mx-auto">
        <img 
            src='https://cdn.remitly.com/images/v1/img/elektra_fri_oct_10_2025.wNq0fJWPk7CYKZ6H.svg'
            alt='Meezan Bank'
            className='w-full h-auto'
        />
        <img 
            src='https://cdn.remitly.com/images/v1/img/gcash_fri_oct_10_2025.CiT2mjIPCeEoHtP3.svg'
            alt='EasyPaisa'
            className='w-full h-auto'
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/bancolombia_fri_oct_10_2025.DDpoa815dnYdYSjp.svg'
            alt='UBL'
            className='w-full h-auto'
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/mpesa_fri_oct_10_2025.mdXtKZOfM39rGaWt.svg'
            alt='DollarCast'
            className='w-full h-auto'
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/hdfc_official_fri_oct_10_2025.FJCQgwSLAbklNOiu.svg'
            alt='HBL'
            className='w-full h-auto' 
        />
         <img 
            src='https://cdn.remitly.com/images/v1/img/banco_de_oro_bdo_2018_fri_oct_10.roFQ1WkBH6ygi0es.svg'
            alt='Jazzcas'
            className='w-full h-auto'
        />
        <img 
            src='https://cdn.remitly.com/images/v1/img/sbi_fri_oct_10_2025.uxwwIDzundCBW1pA.svg'
            alt='exchange'
            className='w-full h-auto'
        />
    </div>
</section>
<div className="bg-white text-center p-3 rounded-lg text-sm mb-8 font-semibold mt-12 lg:mt-20">
              Trademarks, trade names and logos displayed are registered trademarks of their respective owners. No affiliation or endorsement of Vneed Pay should be implied.
            </div>
            <div className="bg-blue-50 w-full py-16 sm:py-24 mt-12 lg:mt-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-700 mb-12 sm:mb-20">
            See what businesses are saying
        </h2>

        {/* Testimonials Grid (Responsive: Mobile par 1 column, Tablet/PC par 2 columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            
            {/* Testimonial 1: Emily */}
            <div className="bg-blue-50 p-8 sm:p-10 rounded-xl shadow-lg flex flex-col items-center">
                    <img src='https://cdn.remitly.com/images/v1/img/quote_icon_md.RFbD56TI2smTyVsG.svg'
                    alt='coma1'
                    className='mb-5'/>
                
                
                {/* Testimonial Text */}
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "Vneed Pay has made it incredibly easy and affordable to pay my international employees. I can send payments directly to their bank accounts, quickly and reliably. It's been a game-changer for managing payroll across borders, giving me peace of mind and helping my team feel valued and secure."
                </p>
                
                {/* Author Info */}
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">-Emily</p>
                <p className="text-sm sm:text-base text-gray-500">CEO, eclicksolutions</p>
            </div>
            <div className="bg-blue-50 p-8 sm:p-10 rounded-xl shadow-lg flex flex-col items-center mt-8 lg:mt-0">
                    <img src='https://cdn.remitly.com/images/v1/img/quote_icon_md.RFbD56TI2smTyVsG.svg'
                    alt='coma1'
                    className='mb-5'/>
                
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "It has been amazing to use Vneed Pay. Fast, easy, and transparent fees—what else can you ask for?"
                </p>
                <p className="text-base sm:text-lg font-bold text-gray-900 mb-1">-Anas</p>
                <p className="text-sm sm:text-base text-gray-500">Web development and design, Hexaforge, LLC</p>
            </div>

        </div>
    </div>
</div>
      <section className="bg-[#0b2545] text-white py-12 px-4 md:px-10 w-full">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          See what our customers are saying
        </h2>

        {/* Review Container */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
          {/* Left Side */}
          <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-3">Excellent</h3>
            <div className="flex items-center mb-2">
              {/* 5 Green Stars */}
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00b67a"
                    viewBox="0 0 20 20"
                    className="w-5 h-5 mx-[1px]"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.907a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.316 2.412a1 1 0 00-.364 1.118l1.26 3.907c.3.921-.755 1.688-1.54 1.118l-3.316-2.412a1 1 0 00-1.176 0l-3.316 2.412c-.785.57-1.84-.197-1.54-1.118l1.26-3.907a1 1 0 00-.364-1.118L2.05 9.334c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.26-3.907z" />
                  </svg>
                ))}
            </div>
            <p className="text-sm text-gray-300 mb-2">Based on 93,245 reviews</p>
            <p className="text-sm font-semibold text-[#00b67a]">★ Trustpilot</p>
          </div>

          {/* Review 1 */}
          <div className="md:w-1/4 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00b67a"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.907a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.316 2.412a1 1 0 00-.364 1.118l1.26 3.907c.3.921-.755 1.688-1.54 1.118l-3.316-2.412a1 1 0 00-1.176 0l-3.316 2.412c-.785.57-1.84-.197-1.54-1.118l1.26-3.907a1 1 0 00-.364-1.118L2.05 9.334c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.26-3.907z" />
                  </svg>
                ))}
              <span className="text-xs text-gray-300">Verified</span>
            </div>
            <h4 className="font-semibold text-white mb-2">User friendly and safe</h4>
            <p className="text-sm text-gray-300 mb-3">
              User friendly and safe, fast service.
            </p>
            <p className="text-xs text-[#6fa8dc]">customerAnil, 1 hour ago</p>
          </div>

          {/* Review 2 */}
          <div className="md:w-1/4 p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00b67a"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.907a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.316 2.412a1 1 0 00-.364 1.118l1.26 3.907c.3.921-.755 1.688-1.54 1.118l-3.316-2.412a1 1 0 00-1.176 0l-3.316 2.412c-.785.57-1.84-.197-1.54-1.118l1.26-3.907a1 1 0 00-.364-1.118L2.05 9.334c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.26-3.907z" />
                  </svg>
                ))}
              <span className="text-xs text-gray-300">Verified</span>
            </div>
            <h4 className="font-semibold text-white mb-2">
              A, Reliable, stressless and Fast company
            </h4>
            <p className="text-sm text-gray-300 mb-3">
              I joined Vneed Pay a week ago, already made 3 transfers — very
              satisfied!
            </p>
            <p className="text-xs text-[#6fa8dc]">DaphneDaniel, 2 hours ago</p>
          </div>

          {/* Review 3 */}
          <div className="md:w-1/4  p-5 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#00b67a"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.907a1 1 0 00.95.69h4.1c.969 0 1.371 1.24.588 1.81l-3.316 2.412a1 1 0 00-.364 1.118l1.26 3.907c.3.921-.755 1.688-1.54 1.118l-3.316-2.412a1 1 0 00-1.176 0l-3.316 2.412c-.785.57-1.84-.197-1.54-1.118l1.26-3.907a1 1 0 00-.364-1.118L2.05 9.334c-.783-.57-.38-1.81.588-1.81h4.1a1 1 0 00.95-.69l1.26-3.907z" />
                  </svg>
                ))}
              <span className="text-xs text-gray-300">Verified</span>
            </div>
            <h4 className="font-semibold text-white mb-2">Good</h4>
            <p className="text-sm text-gray-300 mb-3">
              The network was bad but I managed to use Vneed Pay without any
              problems.
            </p>
            <p className="text-xs text-[#6fa8dc]">Gloria Madzivire, 2 hours ago</p>
          </div>
        </div>

        {/* Bottom Note */}
        <p className="mt-10 text-xs text-gray-300 leading-relaxed">
          The customer reviews displayed on this page are collected from Trustpilot
          and reflect individual experiences with our service. These reviews are
          for informational purposes only and represent the personal opinions of
          our customers.
        </p>
      </div>
    </section>

<div className="w-full max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
        Get help with your Vneed Pay Business account
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4 transition-all duration-300"
          >
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-teal-500 text-xl">
                {openIndex === index ? <ChevronUp className="w-5 h-5" /> :  <ChevronDown className="w-5 h-5" />}
              </span>
            </button>
            <div
              className={`mt-2 text-gray-600 text-sm md:text-base transition-all duration-300 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>

<div className="bg-pink-50 py-16 sm:py-24 mt-12 lg:mt-20 w-full mb-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="order-2 lg:order-1 text-center lg:text-left mb-12 lg:mb-0">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
                            Dedicated business support
                        </h2> 
                        <ul className="list-disc list-inside text-lg sm:text-xl text-gray-600 leading-relaxed space-y-3 mb-8 max-w-xl mx-auto lg:mx-0">
                            <li>Vneed Pay Business accounts get fast, specialized help from our dedicated team.</li>
                            <li>Visit our Help Center or call for support.</li>
                        </ul>
                        <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300 text-lg shadow-lg">
                            Get help
                        </button>
                    </div>
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                       <div className="order-1 lg:order-2 flex justify-center lg:justify-start">
                <img 
                    src='https://cdn.remitly.com/images/v1/img/customer_support_team_collage.JKDZbcoMl1LRKSnO.png'
                    alt='Transparent Pricing and Payment Completed'
                    className='w-full max-w-sm lg:max-w-md h-auto object-contain rounded-xl shadow-lg'
                />
            </div>
                    </div>
                </div>

            </div>
        </div>



    <section className="bg-[#0b2545] w-full text-white py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-10">
          Beyond Borders: The Official Vneed Pay Blog
        </h2>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-0 gap-y-8 gap-6 justify-items-center">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#153e75] rounded-2xl overflow-hidden max-w-sm w-full shadow-lg hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-base md:text-lg font-semibold mb-2">
                  {blog.title}
                </h3>
                <a
                  href={blog.link}
                  className="text-sm text-[#6fa8dc] font-medium hover:underline"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>


        <div className="mt-10">
          <button className="bg-blue-200 text-black px-6 py-2 rounded-full font-medium hover:bg-[#1e4c8a] transition duration-300">
            Explore our blog
          </button>
        </div>
      </div>
    </section>

         </div>
  );
};

export default RemitlyBusinessContent;