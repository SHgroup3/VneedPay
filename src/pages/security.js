import React from 'react';
// import {Link} from 'react-router-dom';

const Security = () => {
  // Utility class for links within the article body
  const linkStyle = "text-blue-600 hover:text-teal-800 underline font-medium transition duration-200";

  return (
    <div className="bg-white font-sans min-h-screen">
      
      {/* Article Container - Max width for readability, responsive padding */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <a href="mailto:remitly-security@hotmail.com" target="_blank" rel="noreferrer" className={linkStyle}> Print and/or download pdf</a> 
        
        {/* Main Title */}
        <h1 id="transaction-and-account-security" className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Transaction and Account Security
        </h1>
        
        {/* Lead Paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Account security is important to us and we've taken several steps to protect your Vneed Pay account-related information. You too can do certain things that will help protect your account and personal information.
        </p>

        {/* --- Account Verification Processes Section --- */}
        <section className="space-y-4 pt-6">
          <h2 id="account-verification-processes" className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Account Verification Processes
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your Vneed Pay account is subject to verification procedures to maintain high levels of security, trust, and protection.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you are a new Vneed Pay  customer and you create a new Vneed Pay account using the Vneed Pay website, you must provide certain personal information and complete the e-mail verification process.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Once your account is up and running we deploy a variety of manual and automated risk management procedures that allow us to highlight suspicious account activity. The goal is to identify any characteristics that seem unusual or inconsistent with your past usage. As part of this process we contract with industry leading service providers to verify personal and financial information. These services will never contact you directly or use your information for anything but the successful completion of your intended transaction.
          </p>
        </section>

        {/* --- Password Security Section --- */}
        <section className="space-y-4 pt-6">
          <h2 id="password-security" className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Password Security
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            When you log in to your account we do certain things to protect your account. First, whenever you log in to your Vneed Pay account, you log in using a secure server connection (https://). We use Secure Socket Layer (SSL) with 256-bit encryption, the industry standard in secure server protection.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Your account is also protected by a unique password that you create. You should not use common words or phrases as your password. Instead, your password should be at least eight characters including both numbers and letters using upper and lower cases. You should keep this password confidential. Sharing your password will lessen the security of your Vneed Pay account.
          </p>
        </section>

        {/* --- Be Wary of Internet Scams Section --- */}
        <section className="space-y-4 pt-6">
          <h2 id="be-wary-of-internet-scams" className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Be Wary of Internet Scams
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed pl-4">
            <li>DO NOT make a payment to claim lottery or prize winnings, or on a promise of receiving a large amount of money.</li>
            <li>DO NOT make a payment because you are "guaranteed" a credit card or loan.</li>
            <li>DO NOT respond to an Internet or phone offer that you aren't sure is honest.</li>
            <li>DO NOT make a payment to someone you don't know or whose identity you can't verify.</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed pt-3">
            When in doubt, ask the intended recipient for more information about the purpose and safety of the requested payment. Do not send the payment until you are comfortable with the transaction.
          </p>
        </section>

        {/* --- Identifying Phishing or Spoofed E-mails Section --- */}
        <section className="space-y-4 pt-6">
          <h2 id="identifying-phishing-or-spoofed-e-mails" className="text-2xl sm:text-3xl font-bold text-gray-900 mt-8 mb-4">
            Identifying Phishing or Spoofed E-mails
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            You may at some time receive an e-mail that looks like it came from Vneed Pay, but is in fact not genuine. Such an e-mail may direct you to a website that looks similar to the Vneed Pay website. You might even be asked to provide account information such as your e-mail address and password.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            These false websites can steal your sensitive account and payment information in order to commit fraud. These false e-mails may contain potential viruses or malware that can detect passwords or sensitive data. We therefore recommend that you install an anti-virus program and keep it updated at all times.
          </p>
          <p className="text-gray-700 text-xl font-semibold mt-6 mb-4">
            Here are some key points to keep in mind as part of a defense against fraudulent e-mails:
          </p>
          
          {/* Numbered List of Defense Tips */}
          <ol className="list-decimal list-inside space-y-6 text-gray-800 text-lg leading-relaxed pl-4">
            
            {/* Item 1 */}
            <li>
              <h5 id="know-what-remitly-wont-ask-for-by-e-mail" className="text-xl font-bold text-teal-700 inline ml-2">
                Know what Vneed Pay won't ask for by e-mail
              </h5>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                <li>Your full social security number or date of birth</li>
                <li>Your credit card number, PIN, or credit card security code (including "updates" to any of the above)</li>
              </ul>
            </li>

            {/* Item 2 */}
            <li>
              <h5 id="be-wary-of-attachments-in-suspicious-e-mails" className="text-xl font-bold text-teal-700 inline ml-2">
                Be wary of attachments in suspicious e-mails
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                We recommend that you not open any e-mail attachments from suspicious or unknown sources. E-mail attachments can contain viruses that infect your computer when the attachment is opened. If you receive a suspicious e-mail purportedly sent from Vneed Pay that contains an attachment we recommend that you delete the e-mail, without opening the attachment.
              </p>
            </li>

            {/* Item 3 */}
            <li>
              <h5 id="look-for-grammatical-or-typographical-errors" className="text-xl font-bold text-teal-700 inline ml-2">
                Look for grammatical or typographical errors
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                Look for poor grammar or typographical errors. Some phishing e-mails are translated from other languages or are sent without being proofread, and as a result, contain bad grammar or typographical errors.
              </p>
            </li>

            {/* Item 4 */}
            <li>
              <h5 id="check-the-return-address" className="text-xl font-bold text-teal-700 inline ml-2">
                Check the return address
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                Is the e-mail from Vneed Pay? While phishers can send a forged e-mail to make it look like it came from Vneed Pay, you can sometimes determine whether it's authentic by checking the return address. If the "from" line of the e-mail looks like 
                <a href="mailto:remitly-security@hotmail.com" target="_blank" rel="noreferrer" className={linkStyle}> Vneed-Pay-security@hotmail.com</a> 
                or 
                <a href="mailto:remitly-fraud@msn.com" target="_blank" rel="noreferrer" className={linkStyle}> Vneed-Pay-fraud@msn.com</a>
                , or contains the name of another Internet service provider, you can be sure it’s not genuine.
              </p>
            </li>

            {/* Item 5 */}
            <li>
              <h5 id="check-the-website-address" className="text-xl font-bold text-teal-700 inline ml-2">
                Check the website address
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                Genuine Vneed Pay websites are always hosted on the following domain: 
                <a href="https://www.remitly.com/" target="_blank" rel="noreferrer" className={linkStyle}> https://www.remitly.com/</a>
              </p>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                Sometimes the link included in spoofed e-mails looks like a genuine Vneed Pay address. You can check where it actually points to by hovering your mouse over the link--the actual website where it points to will be shown in the status bar at the bottom of your browser window or as a pop-up.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                We never use a web address hosted on a domain other than the ones listed above. For instance, variant domains such as 
                <a href="https://security-payments-remitly.com/" target="_blank" rel="noreferrer" className={linkStyle}> https://security-payments-remitly.com/</a>
                . . . or an IP address (string of numbers) followed by directories such as 
                <a href="https://123.456.789.123/remitly.com/" target="_blank" rel="noreferrer" className={linkStyle}> https://123.456.789.123/remitly.com/</a>
                . . . are not valid Vneed Pay websites.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                Also, sometimes the spoofed e-mail is set up such that if you click anywhere on the text you are taken to the fraudulent website. Vneed Pay will never send an e-mail that does this. If you accidentally click on such an e-mail and go to a spoofed website, do not enter any information; instead, just close that browser window.
              </p>
            </li>

            {/* Item 6 */}
            <li>
              <h5 id="if-an-e-mail-looks-suspicious-go-directly-to-the-remitly-website" className="text-xl font-bold text-teal-700 inline ml-2">
                If an e-mail looks suspicious, go directly to the Vneed Pay website
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                When in doubt, do not click the link included in an e-mail. Go directly to 
                <a href="https://www.remitly.com/" target="_blank" rel="noreferrer" className={linkStyle}> https://www.remitly.com/</a> 
                and click 
                <strong className="font-extrabold text-teal-700"> Your Account</strong> 
                in the top right menu to view recent purchases, or review your account information. If you cannot access your account, or if you see anything suspicious, let us know right away.
              </p>
            </li>

            {/* Item 7 */}
            <li>
              <h5 id="protect-your-account-information" className="text-xl font-bold text-teal-700 inline ml-2">
                Protect your account information
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                If you did click through from a spoofed or suspicious e-mail and you entered your Vneed Pay account information, you should 
                <strong className="font-extrabold text-red-600"> immediately</strong> 
                update your password. You can do this by going directly to 
                <a href="https://www.remitly.com/" target="_blank" rel="noreferrer" className={linkStyle}> https://www.remitly.com/</a> 
                and clicking 
                <strong className="font-extrabold text-teal-700"> Account Settings</strong>. On the next page, click the 
                <strong className="font-extrabold text-teal-700"> Change your personal information, e-mail address, or password</strong>.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                If you submitted your credit card number to the site linked to from the forged e-mail message, we advise that you take steps to protect your information. You might want to contact your credit card company, for example, to notify them of this matter. Finally, you should delete that credit card from your Vneed Pay account to prevent anyone from improperly regaining access to your account.
              </p>
            </li>

            {/* Item 8 */}
            <li>
              <h5 id="reporting-phishing-e-mail" className="text-xl font-bold text-teal-700 inline ml-2">
                Reporting Phishing E-mail
              </h5>
              <p className="text-gray-700 text-lg leading-relaxed pt-2 pl-6">
                If you have received an e-mail you know is a forgery, or if you think you have been a victim of a phishing attack and you are concerned about your Vneed Payaccount, please let us know right away by reporting a 
                <a href="/home/contact/" target="_blank" rel="noreferrer" className={linkStyle}> phishing or spoofed e-mail</a>
                .
              </p>
            </li>
          </ol>
        </section>

      </article>
    </div>
  );
};

export default Security;
