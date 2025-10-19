import React from "react";

export default function License(){
    return(
            <div className="w-full bg-white text-gray-800 px-4 md:px-8 lg:px-16 py-10 space-y-10">
      {/* Section 1 */}
      <section className="max-w-4xl mx-auto bg-blue-50 w-full">
        <p className="text-medium leading-relaxed">
          <em>Vneed Pay, Inc.</em> is registered with the U.S. Dept. of Treasury
          as a Money Services Business and licensed in several U.S. states as a
          money transmitter. Please see more information below. Residents of
          certain states may have specific rights related to concerns or
          complaints about our money transfer service. Please see the{" "}
          <a
            href="https://www.remitly.com/us/en/home/agreement#refund"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Disputes, Questions and Refunds section of the User Agreement
          </a>{" "}
          for more information. Finally, please be aware that Vneed Pay is able to
          do business in some states without a money transmitter license due to
          either the absence of an otherwise applicable law or the manner in
          which an existing law may be applied to Vneed Pay’s online business
          model.
        </p>
      </section>

      {/* Section 2 */}
      <section className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-center mb-3 text-gray-900">
          Our State Licenses
        </h3>
        <p className="text-xl leading-relaxed">
          We are authorized to transmit money in all U.S. states and Washington,
          D.C. We also operate in all Canadian provinces and territories. For
          jurisdictions where we have been issued a license, please see below:
        </p>
      </section>
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-10">
        {/* Left Column – Canada Info */}
        <div className="w-full md:w-1/2">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl text-center font-extrabold text-gray-900">Canada</h2>

            <p className="text-lg text-center leading-relaxed">
              <strong>
                Financial Transactions and Reports Analysis Centre of Canada
                (FINTRAC)
              </strong>
              <br />
              <strong>Registration number:</strong> M15481516
            </p>

            <p className="text-medium leading-relaxed text-center">
              <strong>
                <a
                  href="https://www.revenuquebec.ca/en/businesses/sector-specific-measures/money-services-businesses-msbs/register/result/register-of-money-services-businesses/?client=1224861563&amp;cHash=4b834667d122e63acd88504b54074257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Revenu Québec
                </a>
              </strong>
              <br />
              <strong>License number:</strong> 12441
            </p>
          </div>
        </div>

        {/* Right Column (Empty for now — can be filled later if needed) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-lg font-semibold text-gray-900">&nbsp;</h4>
        </div>
      </div>

      </div>
    )
}
