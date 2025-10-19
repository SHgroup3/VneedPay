import React, {useState} from "react";
import { FaList, FaMoneyBillWave, FaCheckCircle, FaArrowRight } from "react-icons/fa";


const banks = [
  {
    name: "Allied Bank",
    logo: "https://cdn.remitly.com/images/v1/img/allied_bank_thu_aug_24_2023.roZVCDiHzB3wGEpR.svg",
  },
  {
    name: "United Bank (UBL)",
    logo: "https://cdn.remitly.com/images/v1/img/united_bank_limited_ubl_thu_aug_.shwTtprOPwmwx3F3.svg",
  },
  {
    name: "Meezan Bank",
    logo: "https://cdn.remitly.com/images/v1/img/meezan_bank_tue_aug_22_2023.aWd1iKZUz5g1PedZ.svg",
  },
  {
    name: "Bank Al Habib",
    logo: "https://cdn.remitly.com/images/v1/img/bank_al_habib_thu_aug_24_2023.sXL2Qo4cx2eYHD8u.svg",
  },
  {
    name: "MCB Bank",
    logo: "https://cdn.remitly.com/images/v1/img/mcb_bank_tue_aug_22_2023.QmntzYlkmifsd2X2.svg",
  },
  {
    name: "Easypaisa",
    logo: "https://cdn.remitly.com/images/v1/img/easypaisa_thu_aug_24_2023.rOPwmwx3F3JLHMXr.svg",
  },
  {
    name: "Bank Alfalah",
    logo: "https://cdn.remitly.com/images/v1/img/bank_alfalah_thu_aug_24_2023.EWLNsFWIfEroZVCD.svg",
  },
  {
    name: "Habib Bank (HBL)",
    logo: "https://cdn.remitly.com/images/v1/img/habib_bank_limited_hbl_tue_aug_2.V8kYbPnLs52dYHme.svg",
  },
];

export default function Home(){
      const [showSearch, setShowSearch] = useState(false);
  const [search, setSearch] = useState("");
const bankname = [
     "Allied Bank",
    "United Bank (UBL)",
    "Meezan Bank",
    "Bank Al Habib",
    "MCB Bank",
    "Easypaisa",
    "Bank Alfalah",
    "Habib Bank (HBL)",
    "Faysal Bank",
    "Askari Bank",
    "National Bank of Pakistan",
    "JS Bank",
]
   const filteredBanks = bankname.filter((bank) =>
    bank.toLowerCase().includes(search.toLowerCase())
  );

    return(
        <div>
        <section className="flex flex-col-reverse md:flex-row justify-between items-center px-6 md:px-16 py-12 bg-[#f9f8f6]">
        {/* Left Side Text */}
        <div className="text-center md:text-left md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-700 leading-tight">
            Worry-free transfers for you and your loved ones
          </h1>
          <button className="px-6 py-3 bg-teal-900 text-white text-lg font-semibold rounded-full hover:bg-teal-900 transition">
            Learn more
          </button>
        </div>

        {/* Right Side Images */}
         <div className="flex justify-center md:justify-end md:w-1/2 mb-10 md:mb-0 md:pl-10">
          <img
            src="https://cdn.remitly.com/images/v1/img/remitly_family_culture_tue_feb_1.575klKiz9pyKl17l.png"
            alt="Happy family"
            className="rounded-lg shadow-sm object-cover w-full max-w-md h-auto"
          />
        </div>
      </section>
       <section className="text-center bg-white text-gray-700 py-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        Find out why millions worldwide trust Vneed Pay
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-start gap-16 md:gap-24">
        {/* Peace of Mind */}
        <div className="max-w-xs mx-auto">
          <FaList className="text-4xl text-teal-900 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Peace of Mind</h3>
          <p className="text-gray-700  text-lg">
            You and your loved ones can track your transfer every step of the
            way.
          </p>
        </div>

        {/* Great Value */}
        <div className="max-w-xs mx-auto">
          <FaMoneyBillWave className="text-4xl text-teal-900 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">Great Value</h3>
          <p className="text-gray-700 text-lg">
            More money makes it home thanks to our great rates, special offers,
            and no hidden fees.
          </p>
        </div>

        {/* Delivery Time Guaranteed */}
        <div className="max-w-xs mx-auto">
          <FaCheckCircle className="text-4xl text--teal-900 mb-4 mx-auto" />
          <h3 className="text-xl font-semibold mb-2">
            Delivery Time Guaranteed
          </h3>
          <p className="text-gray-700 text-lg">
            You can trust that transfers will be delivered on time or we’ll
            refund your fees.
          </p>
        </div>
      </div>
    </section>
    <section className="text-center bg-white text-gray-700 py-10 px-2">
      <div class="rm-col-12 rm-col-md-10">
        <h2 class="text-center text-gray-700 text-3xl font-bold"><span>
          Where to send money in Pakistan  with Vneed Pay</span></h2><p class="f1k1kmpj text-lg"><span>
            Cash pickup, bank deposit, mobile wallet, and more delivery options with our trusted network in Pakistan. Click
            <p className="text-lg">your preferred provider to learn more.</p></span>
            </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center py-16 py-6">
        {banks.map((bank, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl border border-gray-100 w-56 h-44 flex flex-col justify-center items-center hover:shadow-lg transition"
          >
            <img
              src={bank.logo}
              alt={bank.name}
              className="h-12 mb-4 object-contain"
            />
            <div className="flex items-center gap-1 text-[#0077b6] font-medium hover:underline">
              <span>{bank.name}</span>
              <FaArrowRight className="text-sm mt-[2px]" />
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="mt-12">
         <button
        onClick={() => setShowSearch(!showSearch)}
        className="bg-teal-900 text-white px-6 py-2 rounded-lg hover:bg-teal-900 transition-all duration-200"
      >
        {showSearch ? "Hide" : "View More"}
      </button>

      {/* --- Search Bar Section (appears after clicking) --- */}
      {showSearch && (
        <div className="w-full max-w-3xl mt-6 justify-center">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search bank name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* --- Bank Grid --- */}
          <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-md p-4">
            {filteredBanks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredBanks.map((bank, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-center hover:bg-blue-50 cursor-pointer text-sm font-medium"
                    onClick={() => setSearch(bank)}
                  >
                    {bank}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center">No bank found</p>
            )}
          </div>
        </div>
      )}
      </div>
      <p className="text-gray-700 text-sm py-2 px-2">Trademarks, trade names and logos displayed are registered trademarks of their respective owners. No affiliation or endorsement of Vneed Pay should be implied.
</p>
      </div>
    </section>
    <section>
    <div class="f1xvztl6"><div class="f1m77dj7 rm-container"><header class="fegp659">
      <div class="rm-row justify-content-center"><div class="rm-col-12 rm-col-md-10">
        <h2 class="text-center text-3xl md:text-4xl font-bold mb-16 text-gray-700"><span>Reliable money transfers from Canada to Pakistan</span></h2>
        </div></div></header>
        <div className="flex justify-center py-10 bg-gray-50">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-6">
             <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm">
          <img
            src="https://cdn.remitly.com/images/v1/img/agave_icon_standard_locked_tue_s.NAqaLH4TnwyxKfD9.svg"
            alt="Safe and secure"
            width="48"
            height="48"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Safe and Secure</h3>
          <p className="text-gray-600">
            Your safety is our top priority. Multi-level security keeps your
            money and data protected.
          </p>
        </div>
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-sm">
          <img
            src="https://cdn.remitly.com/images/v1/img/agave_icon_standard_customerserv.Yo9qyJKXPUOZ48Ie.svg"
            alt="24/7 Customer Support"
            width="48"
            height="48"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">24/7 Customer Support</h3>
          <p className="text-gray-600">
            Fast and friendly support for you and your loved ones.
          </p>
        </div>
           </div>
        </div>
                  </div>
                  </div>
                  </section>
 
        </div>

    )
}
