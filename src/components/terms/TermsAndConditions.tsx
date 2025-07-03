"use client"
import React, { useState } from "react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { id: "identity", label: "Identity" },
  { id: "definitions", label: "Definitions" },
  { id: "applicability", label: "Applicability" },
  { id: "offer", label: "The Offer" },
  { id: "agreement", label: "The Agreement" },
  { id: "withdrawal", label: "Right of Withdrawal" },
  { id: "delivery", label: "Delivery and Implementation" },
  { id: "exclusion", label: "Exclusion withdrawal" },
  { id: "price", label: "Price" },
  { id: "compliance", label: "Compliance with the Agreement" },
  { id: "delivery-execution", label: "Delivery and Execution" },
  { id: "payment", label: "Payment" },
  { id: "ip", label: "Intellectual Property Rights" },
  { id: "complaints", label: "Complaints Procedure" },
  { id: "personal-data", label: "Personal Data" },
  { id: "marketing", label: "Marketing terms" },
  { id: "disputes", label: "Disputes" },
];

const TermsAndConditions = () => {
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
            <h1 className="text-4xl font-light text-black mb-2">
              Terms & Conditions
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <section id="identity" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">1. Identity</h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>The private limited company Rino & Pelle Online B.V., with its registered offices at Olivier van Noortweg 6 at 5928 LX Venlo, NL, also operating under the name of Rino & Pelle.</p>
                <p>Telephone Number: +31 (0)77 472 3383</p>
                <p>Email Address: customercare@rinopelle.com</p>
                <p>Chamber of Commerce number: 85283223</p>
              </div>
            </section>

            <section id="definitions" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">2. Definitions</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>In these Terms and Conditions (hereinafter referred to as "Terms and Conditions") the following terms have the following meanings:</p>
                <p className="font-medium">Rino & Pelle: Rino & Pelle Online B.V.</p>
                <p className="font-medium">Agreement: a remote contract that is concluded between Rino & Pelle and the Consumer in the context of an organised system for the remote selling of products, whereby exclusive or joint use is made of one or more remote communication technologies up to and including the conclusion of the Agreement;</p>
                <p className="font-medium">Consumer: a natural person, who does not act for purposes related to his/her trade, business, craft, or professional activity;</p>
                <p className="font-medium">Cooling-off Period: a period of 30 days after the product is received, during which you, as the Consumer, are entitled to exercise your right of withdrawal;</p>
                <p className="font-medium">Right of Withdrawal: the option for the Consumer to decide against the remote contract within the Cooling-off Period;</p>
                <p className="font-medium">Refund: once we have received your return, we will arrange a refund within 14 days. The return costs will be deducted from the total refund. If you haven't received any information after 14 working days please contact our Customer Care Team via customercare@rino-pelle.com.</p>
                <p className="font-medium">Terms and Conditions: these general Terms and Conditions, which apply between Rino & Pelle and the Consumer;</p>
              </div>
            </section>

            <section id="applicability" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-blackmb-6">3. Applicability</h2><br />
              <div className="space-y-4 text-black leading-relaxed">
                <p>3.1 These Terms and Conditions apply to every offer from Rino & Pelle and to every Agreement that comes into effect between Rino & Pelle and the Consumer.</p>
                <p>3.2 The text of these Terms and Conditions are available to the Consumer prior to the conclusion of the Agreement and the Consumer can simply save this on a Permanent Data Carrier.</p>
              </div>
            </section>

            <section id="offer" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">4. Offer</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>4.1 If an offer has a limited validity period or takes place subject to conditions, this will be set out in the offer.</p>
                <p>4.2 The offer contains a description of the offered products in a manner that will enable a proper assessment of the offer by the Consumer. Apparent mistakes or apparent errors in the offer will not bind Rino & Pelle.</p>
              </div>
            </section>

            <section id="agreement" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-blackmb-6">5. Agreement</h2><br />
              <div className="space-y-4 text-black leading-relaxed">
                <p>5.1 The Agreement comes into effect at the time of placement of the order. Rino & Pelle promptly confirms by electronic means receipt of the acceptance of the offer.</p>
                <p>5.2 Rino & Pelle performs the Agreement on the basis of best endeavours.</p>
                <p>5.3 Rino & Pelle makes efforts to take suitable technical and organisational measures for the protection of the electronic transfer of data and makes every reasonable effort to ensure a secure web environment.</p>
                <p>5.4 Rino & Pelle may make enquiries into the ability of the Consumer to fulfil his/her payment obligations, as well as into all those facts and factors that are relevant to entering into the Agreement responsibly. If Rino & Pelle, on the basis of this research, has good grounds not to enter into the Agreement, Rino & Pelle is entitled to refuse an order or application, or to attach special conditions to the performance, on stating its reasons.</p>
              </div>
            </section>

            <section id="withdrawal" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6 ">6. Right of Withdrawal</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>6.1 The Consumer may withdraw an Agreement with regard to the purchase of a product during the Cooling-off Period.</p>
                <p>6.2 If the Consumer wishes to exercise his/her Right of Withdrawal for undamaged and unused products, he/she must notify Rino & Pelle within the Cooling-off Period by completing the online return form.</p>
                <p>6.3 The Consumer returns the product as soon as possible, but at the latest within 14 days from the day following notification that they are exercising their Right of Withdrawal, or the Consumer hands the product to (an authorised representative of) Rino & Pelle, unless Rino & Pelle collects the product.</p>
                <p>6.4 The Consumer bears the direct costs of return dispatch of the product, unless stated otherwise by Rino & Pelle.</p>
                <p>6.5 The Consumer returns the product together with all accessories supplied, if reasonably possible in its original condition and packaging, and in accordance with the instructions provided by Rino & Pelle.</p>
                <p>6.6 The risk and the burden of proof of the correct exercise in a timely manner of the Right of Withdrawal is vested in the Consumer.</p>
                <p>6.7 Rino & Pelle refunds all payments made by the Consumer, including any delivery costs charged by Rino & Pelle for the returned product, promptly but in any event within 14 days after the day on which the Consumer notified Rino & Pelle of withdrawal excluding the return costs.</p>
              </div>
            </section>

            <section id="delivery" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">7. Cooling-off Period</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>7.1 The Consumer handles the product and packaging with good care during the Cooling-off Period. He/she will only unwrap or use the product to the extent that this is necessary to establish the nature, the characteristics and the functioning of the product. The starting point hereby is that the Consumer is only permitted to handle and inspect the product to the same extent as in a shop.</p>
                <p>7.2 The Consumer is liable for any decrease in value of the product that is the result of a manner of handling the product that goes beyond the extent stated in article 7.1.</p>
              </div>
            </section>

            <section id="exclusion" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">8. Exclusion of the Right of Withdrawal</h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>8.1 Rino & Pelle may exclude products from the Right of Withdrawal. This is stated with the offer in the webshop, in a timely manner prior to the conclusion of the Agreement. The exclusion of the right of withdrawal applies in any case to products that are custom-made for the Consumer.</p>
              </div>
            </section>

            <section id="price" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">9. Price</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>9.1 The prices of the offered products shall not be increased during the validity period stated in the offer, with the exception of price changes as a result of changes in legal provisions.</p>
                <p>9.2 The prices of the products stated in the offer are in Euros, including VAT and exclude any shipping and administrative costs.</p>
                <p>9.3 Rino & Pelle is entitled to periodically adjust its prices.</p>
              </div>
            </section>

            <section id="compliance" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">10. Compliance with the Agreement</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>10.1 Rino & Pelle guarantees that the products meet the sound condition and/or fitness for purpose of the products delivered by it in conformity with the specifications set out.</p>
                <p>10.2 The risk of damage to and/or loss of products is vested in Rino & Pelle until the time of delivery to the Consumer, or to a representative appointed in advance and made known to Rino & Pelle.</p>
                <p>10.3 Ownership of the delivered products only transfer after the amount owed has been paid.</p>
              </div>
            </section>

            <section id="delivery-execution" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">11. Delivery and Execution</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>11.1 Rino & Pelle makes every effort to observe care when taking receipt of and during the execution of the orders.</p>
                <p>11.2 The Consumer is responsible for providing Rino & Pelle with the correct address, email address, mobile telephone number, payment details and any changes to these in a timely manner.</p>
                <p>11.3 Rino & Pelle makes every effort to execute the accepted orders, no later than within 30 days, unless another delivery period has been agreed. If the delivery is delayed, or if a delivery cannot or can only partially be executed, the Consumer shall be notified no later than 30 days after the order was placed.</p>
                <p>11.4 Deliveries take place for as long as the products are in stock.</p>
              </div>
            </section>

            <section id="payment" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">12. Payment</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>12.1 Rino & Pelle is permitted to charge the applicable price at the point of delivery to the Consumer, which the Consumer is obliged to pay.</p>
                <p>12.2 If the Consumer does not pay in a timely manner, Rino & Pelle reminds the Consumer and allow them a reasonable further payment period. If payment is still not forthcoming, Rino & Pelle may charge the extrajudicial collection costs incurred by Rino & Pelle. These collection costs amount to a maximum of: 15% of outstanding sums up to € 2,500; 10% of the next € 2,500 and 5% of the next € 5,000 with a minimum of € 40.</p>
              </div>
            </section>

            <section id="ip" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">13. Intellectual Property Rights</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>13.1 Any intellectual property rights and know-how of Rino & Pelle with regard to this Agreement and the products supplied by Rino & Pelle, are vested in Rino & Pelle and/or its suppliers. No transfer of any intellectual property rights takes place by virtue of the Agreement.</p>
              </div>
            </section>

            <section id="complaints" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">14. Complaints Procedure</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>14.1 Rino & Pelle is committed to providing excellent customer service. Please let us know if you are not satisfied. You can reach us via the contact information on the website of Rino & Pelle.</p>
                <p>14.2 Complaints regarding the performance of the Agreement must be submitted clearly and in full to Rino & Pelle, within a reasonable period after the Consumer has noticed the defects.</p>
                <p>14.3 In principle, any complaint submitted to us shall be responded to within 14 days after submission. If more time is needed for dealing with your complaint, you receive acknowledgement of receipt, which will set out the period in which you can expect a substantive response from us.</p>
              </div>
            </section>

            <section id="personal-data" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">15. Personal Data</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>15.1 Rino & Pelle process personal data in the context of the performance of the Agreement and its service provision in accordance with the applicable legislation and regulations.</p>
              </div>
            </section>

            <section id="marketing" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold text-black mb-6">16. Marketing terms</h2>
              <div className="space-y-4 text-black leading-relaxed">
                <p>These marketing terms apply once customer consents to our marketing services. We divide our marketing services in a promotional email messaging service and a text messaging service.</p>
                <p>16.1 Mobile terms of service</p>
                <p>The Rino&Pelle mobile message service (the "Service") is operated by Rino&Pelle ("Rino&Pelle", "we", or "us"). Your use of the Service constitutes your agreement to these terms and conditions ("Mobile Terms"). We may modify or cancel the Service or any of its features without notice. To the extent permitted by applicable law, we may also modify these Mobile Terms at any time and your continued use of the Service following the effective date of any such changes shall constitute your acceptance of such changes.</p>
                <p>By consenting to Rino&Pelle's SMS/text messaging service, you agree to receive recurring SMS/text messages from and on behalf of Rino&Pelle through your wireless provider to the mobile number you provided, even if your mobile number is registered on any state or federal Do Not Call list. Text messages may be sent using an automatic telephone dialing system or other technology. Service-related messages may include updates, alerts, and information (e.g., order updates, account alerts, etc.). Promotional messages may include promotions, specials, and other marketing offers (e.g., cart reminders).</p>
                <p>You understand that you do not have to sign up for this program in order to make any purchases, and your consent is not a condition of any purchase with Rino&Pelle. Your participation in this program is completely voluntary.</p>
                <p>We do not charge for the Service, but you are responsible for all charges and fees associated with text messaging imposed by your wireless provider. Message frequency varies. Message and data rates may apply. Check your mobile plan and contact your wireless provider for details. You are solely responsible for all charges related to SMS/text messages, including charges from your wireless provider.</p>
                <p>You may opt-out of the Service at any time. Click the unsubscribe link (where available) in any text message or email to cancel. You'll receive a one-time opt-out confirmation text message. No further messages will be sent to your mobile device, unless initiated by you. If you have subscribed to other Rino&Pelle mobile message programs and wish to cancel, except where applicable law requires otherwise, you will need to opt out separately from those programs by following the instructions provided in their respective mobile terms.</p>
                <p>For Service support or assistance, send an email to: webshop@rino-pelle.com.</p>
                <p>We may change our telephone number we use to operate the Service at any time and will notify you of these changes. You acknowledge that any messages you send to a telephone number we have changed may not be received and we will not be responsible for honoring requests made in such messages.</p>
                <p>The wireless carriers supported by the Service are not liable for delayed or undelivered messages. You agree to provide us with a valid mobile number. If you get a new mobile number, you will need to sign up for the program with your new number.</p>
                <p>To the extent permitted by applicable law, you agree that we will not be liable for failed, delayed, or misdirected delivery of any information sent through the Service, any errors in such information, and/or any action you may or may not take in reliance on the information or Service.</p>
                <p>We respect your right to privacy. To see how we collect and use your personal information, please see our Privacy Policy.</p>
              </div>
            </section>

            <section id="disputes" className="mb-12 scroll-m-48">
              <h2 className="text-xl font-semibold  text-black mb-6">17. Disputes</h2>
              <div className="space-y-4  text-black leading-relaxed">
                <p>17.1 The law of the Netherlands applies exclusively to Agreements between Rino & Pelle and the Consumer. Any disputes that might arise between parties to the Agreement shall be submitted to the competent court in the Limburg district in the Netherlands.</p>
                <p>17.2 No matter the language of the Terms and Conditions, the English language of the Terms and Conditions will prevail.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions; 