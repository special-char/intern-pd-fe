"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "introduction", label: "Introduction" },
  { id: "security", label: "Security" },
  { id: "data-collection", label: "Data Collection" },
  { id: "cookies", label: "Cookies" },
  // { id: "data-use", label: "Data Use" },
  { id: "data-sharing", label: "Data Sharing" },
  { id: "user-rights", label: "User Rights" },
  //   { id: "contact", label: "Contact" },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState<string>(navigationItems[0].id);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Sidebar Navigation */}
      <div className="w-64 bg-gray-50 border-r border-gray-200 sticky top-0 h-screen overflow-y-auto">
        <div className="p-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            CUSTOMER SERVICE
          </h3>
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                  activeSection === item.id
                    ? "bg-white text-gray-900 font-medium shadow-sm"
                    : "text-gray-600 hover:bg-white hover:text-gray-900"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-light text-black mb-2 italic">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section id="introduction" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">1. Introduction</h2>
              <p>The privacy policy of Rino & Pelle Online B.V., established at Olivier van Noortweg 6 in Venlo, provides you with information on how we process your personal data. We think it's important to be transparent about the way we collect personal data, how we use them, protect them and inform you about your rights regarding your personal data and privacy. This privacy statement can be changed from time to time. We will always publish the latest version on our website.</p><br /><br />
              <p><strong>Questions?</strong><br /><br />
                If you have any questions after reading the privacy statement about the content or the implementation, you can reach us at:</p>
              <ul>
                <li>Rino & Pelle</li>
                <li>Olivier van Noortweg 6</li>
                <li>5928 LX Venlo</li>
                <li>customercare@rino-pelle.com</li>
              </ul><br />
              <p><strong>What is the general privacy policy of Rino & Pelle?</strong><br /><br />
                We will always respect the privacy of all visitors at our website www.rino-pelle.com and (potential) customers and relations. The safety and confidentiality of your personal data is our highest priority and we will always be very careful with your personal data. Your data will only be shared with parties who are utilized by us to optimize our services and when legally required.</p>
            </section>

            <section id="security" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">2. Security</h2>
              <p>Protecting your personal data is our highest priority. That is why we use a SSL-secured internet connection on our website pages. Third parties are not obliged to look into your personal information without our permission. With SSL, all data are sent encrypted over the internet.</p>
              <p>Besides the SSL, all data have been stored at our own servers. These servers are based in a controlled, secure environment in the Netherlands and are secured against unauthorized access, use or disclosure. We keep your personal data until your request for deregistration, respecting the legal provisions for keeping your data.</p>
              <p>Rino & Pelle takes all necessary measures to prevent abuse, loss, unauthorized access and other unwanted actions of your data. These measures are in accordance with applicable security standards.</p>
            </section>

            <section id="data-collection" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">3. Data Collection</h2>
              <p>We collect data in a GDPR-compliant way. This means we follow the EU regulation when it comes to collecting data.</p>
              <p>When you make use of our services or purchase products online, we collect your personal data such as: your first and last name, your gender, date of birth, addresses, phone number, email address, location and IP address. We use your personal data to deliver our products and to keep you informed about the status of your order/delivery.</p>
              <p>We partner with Microsoft Clarity and Microsoft Advertising to capture how you use and interact with our website through behavioral metrics, heatmaps, and session replay to improve and market our products/services. Website usage data is captured using first and third-party cookies and other tracking technologies to determine the popularity of products/services and online activity. Additionally, we use this information for site optimization, fraud/security purposes, and advertising. For more information about how Microsoft collects and uses your data, visit the Microsoft Privacy Statement.</p>
              <p>Besides collecting your personal data, the website uses cookies to help keep track of your online shopping journey. We use these cookies to learn more about our visitors' activities, preferences, and interests. These cookies keep track of items you put into your shopping cart including when you have abandoned your cart. Once agreed to, we collect your data for marketing purposes. The purpose of collecting your data is used to keep you informed and to determine when to send cart reminder messages via email and/or SMS. Ultimately, we use this data to optimize your online shopping experience.</p>
            </section>

            <section id="cookies" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">4. Cookie use</h2>
              <p>We use so-called cookies. Cookies are simple text files that are sent together with pages of our website and are placed on your computer's hard disk or stored in its memory. We use cookies to retain your settings and preferences. We also use cookies to obtain an insight into how visitors use our website. Doing this enables us to calculate the effectiveness of our internet advertising on our website and on the websites of third parties. On the basis of the actions recorded, we create a profile for you, which we can then use to tailor the internet advertising on our website and the websites of third parties to reflect your preferences.</p>
              <p>You can opt to accept or decline cookies. If you have accepted cookies, you can always deactivate them at a later date by changing your browser settings. If not, they will be saved for 30 days. Cookies and the information they generate are administered by Google Inc. ("Google"). Google may forward this information to third parties if it is obliged to do so by law or if third parties are responsible for processing the information on its behalf. We cannot exert any influence on this. If you want to have more information about this, we can advise you to consult the privacy statement of Google.</p>
            </section>

            <section id="data-sharing" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">5. Sharing your data</h2>
              <p>Rino & Pelle does not sell, rent or lease customer lists to third parties that are in no way related to our company.</p>
              <p>Your data is only shared, subjected to statutory regulation, with third parties when we think this is necessary for the purpose of our services – or when you agreed to sharing your data. These parties will always be (direct or indirect) related to Rino & Pelle. When this is the case, we can guarantee that the information will be shared legitimate and in a transparent way with the third party.</p>
              <p>When it comes to SMS marketing, we will not share your opt-in to an SMS campaign with any third party for purposes unrelated to providing you with the services of that campaign. We may share your personal data, including your SMS opt-in or consent status, with third parties that help us provide our messaging services, including but not limited to platform providers, phone companies, and any other vendors who assist us in the delivery of text messages.</p>
            </section>

            <section id="user-rights" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">6. The right of inspection, correction or removal</h2>
              <p>If you have any questions regarding how we process your data or if you want to know which data has been registered by us and for which purpose this data will be used, then you can utilize the rights you have based on General Data Protection Regulation.</p>
              <p>To request to adapt or delete your data, you can send an email to customercare@rino-pelle.com. We will reply to your request within one month. Besides that, it's possible to file a complaint with the supervisor; the Dutch Data Protection Authority. You'll also always have the possibility to withdraw your permission to process your data. If you'd like to do so, you can contact the email address above.</p>
            </section>


          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 