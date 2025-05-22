'use client';
import { Typography, List, ListItem, ListItemText, styled } from "@mui/material";

const StyledOl = styled('ol')({
  listStyle: 'none',
  counterReset: 'item',
  paddingLeft: '1.5em',
});

const StyledLi = styled('li')({
  counterIncrement: 'item',
  position: 'relative',
  paddingLeft: '2em',
  marginBottom: '1.2em',
  '&::before': {
    content: 'counter(item) "."',
    position: 'absolute',
    left: 0,
    fontWeight: 'bold',
  },
  '& > ol': {
    counterReset: 'subitem',
    listStyle: 'none',
    paddingLeft: '1.5em',
    marginTop: '0.5em',
  },
  '& > ol > li': {
    counterIncrement: 'subitem',
    position: 'relative',
    paddingLeft: '2.5em',
    marginBottom: '1em',
    '&::before': {
      content: 'counter(item) "." counter(subitem)',
      position: 'absolute',
      left: 0,
      fontWeight: 'bold',
    },
  },
  '& > ol > li > ol': {
    counterReset: 'subitem',
    listStyle: 'none',
    paddingLeft: '1.5em',
    marginTop: '0.5em',
  },
  '& > ol > li > ol > li': {
    counterIncrement: 'subitem',
    position: 'relative',
    paddingLeft: '2.5em',
    marginBottom: '1em',
    '&::before': {
      content: 'counter(item) "." counter(subitem) "." counter(subitem)' ,
      position: 'absolute',
      left: 0,
      fontWeight: 'bold',
    },
  },
});

const StyledUl = styled('ul')({
  listStyle: 'disc',
  paddingLeft: '2.5em',
  marginTop: '0.5em',
});


export default function TermsAndConditionsPage() {
  return (
    <div>
      <Typography variant="h5">Terms and Conditions</Typography>
      <StyledOl>
      <StyledLi>
        Overview and Consent Declaration
        <div style={{ marginTop: '0.5em' }}>
          By clicking or checking “Apply Now” or “I duly accept the Terms and Conditions” or similar statements available at CREDILINQ’s Registration Page or in the course of providing you with the services or upon your submission of application for CREDILINQ’s product offering, you acknowledge that you have read and understood the terms of this Terms and Conditions and that you have agreed and consented to the collection, use, disclosure, storage, transfer and/or processing of your personal and business data as described and under the terms herein.
        </div>
      </StyledLi>
      <StyledLi>
        Commitment to Privacy Laws
        <ol>
          <li>
          CREDILINQ.AI and its affiliates (hereinafter, “CREDILINQ” and collectively or individually, "CREDILINQ", "we" or "us") take your privacy seriously pursuant to our commitment to abide by the Singapore Personal Data Privacy Act (“PDPA), the European General Data Protection Regulation (“GDPR), and all applicable data privacy laws.
          </li>
          <li>
          In the course of you using CREDILINQ's applications and websites (both web and mobile versions), as well as products, information, functions and other services operated by CREDILINQ, we will be collecting, using, disclosing, storing and/or processing data, including your personal and business data (collectively, your “data”). In this Terms, Platform shall refer to all relevant applications and websites (both web and mobile versions), and Services shall refer to all products, information, functions and services provided by CREDILINQ from time to time in the Platform(s).
          </li>
          <li>
          This Terms exists to keep you in the know about how we collect, use, disclose, store and/or process the data we collect and receive during the course of providing the Services or access to the Platform to you, our user, particularly at the time you have submitted an application to avail of our Products and/or Services. We will only collect, use, disclose, store and/or process your personal and business data in accordance with this Terms and Conditions.
          </li>
          <li>
          It is important that you read this Terms and Conditions together with any other applicable notices we may provide for special applications when we are collecting, using, disclosing and/or processing personal and business data about you, so that you are fully aware of how and why we are using your personal and business data.
          </li>
          <li>
          We may update this Terms and Conditions from time to time. Any changes we make to this Terms and Conditions in the future will be reflected on this page and material changes will be notified to you. Where permissible under local laws, your continued use of the Services or access to the Platform, including your access to the reports rendered by CREDILINQ, or express consent thereto, following the modifications, updates or amendments to this Terms and Conditions (whether or not you have reviewed such document) shall constitute your acknowledgment and acceptance of the changes we make to this Terms and Conditions. You agree that it is your responsibility to review and check the Terms and Conditions frequently to see if any updates or changes have been made to this Terms and Conditions.
          </li>
          <li>
          This Terms and Conditions applies in conjunction with other notices, contractual clauses and consent clauses that apply in relation to the collection, storage, use, disclosure and/or processing of your data by us and is not intended to override them unless we state expressly otherwise.
          </li>
          <li>
          All of these terms apply to CREDILINQ’s users, particularly upon submission of an application for CREDILINQ’s Products and/or Services, regardless of the outcome of said application.
          </li>
        </ol>
      </StyledLi>

      <StyledLi>
      The Personal and Business Data We Collect From You
      <ol>
        <li>We collect the personal and business data described below in accordance with applicable local laws and, if required, upon obtaining your consent.</li>
        <li>Personal data means any information about an individual, whether recorded in a material form or not and whether true or not, who can be identified from that data (whether directly or indirectly), or from that data and other data to which we have or are likely to have access, including but not limited to name, contact numbers, e-mail address, and identification numbers.</li>
        <li>Business data means any information about your business transactions, status of business, as well as financial matters, including but not limited to business registry number, business name, bank statements, financial statements, business registration certificates, tax information, directors and shareholders information, or any applications, documents or data used in the conduct of business, as well as data provided to grant access to such information such as passwords and/or other confidential information.</li>
        <li>
        Depending on your use of our Platform and/or your interaction with our Services (such as when registering for our Services and/or logging into our Platform), you may be asked to provide us with certain information. While you can choose not to provide us with certain information, you might not be able to take advantage of our Services that are offered to you or that it may not be possible for us to render a report in relation to the status of your business and/or its financial standing. The personal and business data that you may opt to provide to us are as follows:
          <ol>
            <li>Identity and Profile Data, which may include your name, date of birth, gender, username and password, email address, telephone number, your interests, and any personal data in any photographs or videos or audio recordings that you upload onto our Platform.</li>
            <li>Business Data, which may include your company name, business address, date of incorporation, and other business-related information (e.g. company registration number, business licence, tax information, shareholder and director information, bank statements, GST statement, business details from ACRA, tax-related documents, audited financial statements)</li>
            <li>
            Account and Transaction Data, which may include your previous history of access of the Platform, as well as details of products and services that you have accessed through the Platform.
            </li>
            <li>Usage Data, such as information about how and when you use the Platform, products and Services or view any content on the Platform, as well as websites you were visiting before you came to the Platform and other similar statistics.</li>
            <li>Marketing and Communications Data, which may include your interests, survey responses, preferences in receiving marketing materials from us and your communication preferences, your preferences for particular products or services, as well as your feedback, chat, email or call history on the Platform or with third party service providers.</li>
            <li> Location data</li>
          </ol>
        </li>
        <li>Location data Upon submission of application for CREDILINQ’s Products and/or Services, we automatically collect and process certain types of data required by us to be able to render a report in accordance with the purposes set out herein.</li>
      </ol>
    </StyledLi>
    <StyledLi>
    How We Receive Your Personal and Business Data
      <ol>
        <li>
        During the course of your use of the Platform and our provision of the Services, we may receive personal and business data from you in the following situations:
        <ol>
          <li>When you browse our websites (both mobile and web versions);</li>
          <li>When you subscribe to or otherwise use any of the Services on our Platform and/or on the platforms of our affiliates, including completing the application form, attaching and submission of documents (e.g. bank statements, audited financial statements);</li>
          <li>We may collect or source information related to you or your business supplied by Singapore government entities such as, but not limited to ACRA, IRAS, and MAS;</li>
          <li>When you allow us to access your accounting software or any other software applications being used in the course of your business;</li>
          <li>When you make a transaction regarding the products and/or services available on the Platform;</li>
          <li>When you use any of the features, functions, or mini-apps available on the Platform or Services;</li>
          <li>When you record any user-generated content which is uploaded on the Platform;</li>
          <li>When you use the chat function on the Platform;</li>
          <li>When you subscribe to our publications or marketing collaterals;</li>
          <li>When you enter a promotion or survey;</li>
          <li>When you participate in any activity or campaign on the Platform;</li>
          <li>When you log in to your account on the Platform or otherwise interact with us via an external service or application, such as Facebook or Google;</li>
          <li>When any other user of the Platform posts any comments on the content you have uploaded on the Platform or when you post any comments on other users’ content uploaded to the Platform;</li>
          <li>When a third party lodges a complaint against you or the content you have posted on the Platform;</li>
          <li>When you interact with us offline, including when you interact with our outsourced customer service agents.</li>
        </ol>
        </li>
        <li>
        We may collect personal and business data from you, or as available from third parties (including but not limited to agents, vendors, contractors, partners and any others who provide services to us, who collect and/or manage your personal and business information and/or perform functions on our behalf, or with whom we collaborate, including but not limited to payment service providers, government sources of data, financial services providers, credit bureaus, delivery, marketing and other service partners), our affiliates, or such data may be collected in connection with your use of the Platform or the Services, as set out in this section. Please see also Sections 5.1 to 5.5 on the collection of computer data.
        </li>
        <li>
        During the course of your use of the Platform and our provision of the Services, you agree that you have provided your consent (whether to us, the third party or our affiliates) to the transfer of your personal and business data from third parties and/or our affiliates to CREDILINQ for the purposes set out in this Terms and Conditions or any other terms.
        </li>
        <li>
        You agree to only submit personal and business data which are accurate and not misleading and to keep it up to date and inform us of any changes to the data that you have provided to us. We shall have the right to request for documentation and carry out the necessary checks to verify the data provided by you as part of our user verification processes or as required under law.
        </li>
        <li>
        We will only be able to collect certain categories of personal and business data if you voluntarily provide the data to us or as otherwise provided for under this Terms and Conditions. If you choose not to provide your personal and business data to us or subsequently withdraw your consent to our use of your personal and business data, you understand and accept that we may not be able to provide you with certain features or functionality on the Services or access to the Platform and we may not be able to assess your business status that would enable us to render a report relating to your business.
        </li>
        <li>
        If you provide data of any third party to us, you represent and warrant that you have obtained the necessary consent, licence and permissions from that third party to share and transfer his/her data to us, and for us to collect, store, use, disclose or otherwise process that data in accordance with this Terms and Conditions.
        </li>
        <li>
        To the extent applicable, if you accessed our Platform and/or our Services using your social media account or link the information submitted to us from your social media account or use certain other social media features, we may access personal and business data about you which you have voluntarily provided to your social media provider in accordance with the provider's policies and we will manage your data in accordance with this Terms and Conditions.
        </li>
      </ol>
    </StyledLi>
    <StyledLi>
    Collection of Computer Data
      <ol>
        <li>We or our authorized service providers may use cookies, web beacons, and other similar technologies in connection with your use of the Services or access of the Platform.</li>
      <li>When you visit the Platform through your computer, mobile device, or any other device with Internet connectivity, our company servers will automatically record data that your browser sends whenever you visit a website, such as the technical data and usage data outlined above.</li>
      <li>This data is collected for analysis and evaluation in order to help us improve our website and the services and products we provide, as well as to help us to personalize the content to match your preferred interests more quickly. The data is also collected to make the Services and the Platform more convenient and useful to you, and to provide more relevant advertising related to market products, services and features to you.</li>
      <li>Cookies are small text files (typically made up of letters and numbers) placed in the memory of your browser or device when you visit a website or view a message. They allow us to recognize a particular device or browser. Web beacons are small graphic images that may be included on our Services and the Platform. They allow us to count users who have viewed these pages so that we can better understand your preference and interests.</li>
      <li>You may be able to manage and delete cookies through your browser or device settings.</li>
      </ol>
    </StyledLi>
    <StyledLi>
    Use and Disclosure of Your Personal and Business Data
    <ol>
      <li>We use and disclose personal and business data for the purposes described below in accordance with applicable privacy laws and, if required, upon obtaining your consent.</li>
      <li>
        <ol>
          <li>To facilitate your use of the Services or access to the Platform.</li>
          <li>To perform obligations in the course of or in connection with our provision of goods and/or services requested by you, particularly to assess the financial standing of your business and perform financial analysis and/or assess your credit standing, subject to the Disclaimer on Clause 13 of this Terms.</li>
          <li>To verify your identity.</li>
          <li>To manage your relationship with us.</li>
          <li>To carry out checks using agencies or government entities such as credit reference agencies, tracing companies’ identity and compliance with applicable laws, or for obtaining publicly available information.</li>
          <li>To derive further attributes relating to you based on personal and business data provided by you (whether to us or third parties), in order to provide you with more targeted and/or relevant information;</li>
          <li>To conduct data analysis, testing and research, monitoring and analyzing usage and activity trends;</li>
          <li>To further develop our products and services;</li>
          <li>To ascertain your identity in connection with fraud detection purposes;</li>
          <li>To compare information, and verify with third parties in order to ensure that the information is accurate;</li>
          <li>To process any complaints, feedback, enforcement action and take-down requests in relation to any content you have uploaded to the Platform;</li>
          <li>To respond to your queries, feedback, claims or disputes, whether directly or through our third party service providers;</li>
          <li>To produce statistics and research for internal and statutory reporting and/or record-keeping requirements;</li>
          <li>To store, host, back up your personal and business data for operational, legal or business purposes;</li>
          <li>To share personal and business data in connection with any proposed purchase, merger or acquisition of any part of our business, provided that we satisfy the requirements of applicable data protection law when disclosing your data;</li>
          <li>To prevent or investigate any actual or suspected violations of our Terms and Conditions, our Privacy Policy or any of our policies, fraud, unlawful activity, omission or misconduct, whether relating to your use of our Services or any other matter arising from your relationship with us;</li>
          <li>To perform due diligence checks;</li>
          <li>To comply with legal and regulatory requirements (including, where applicable, the display of your name, contact details and company details), including any law enforcement requests, requests by any governmental or regulatory authority having jurisdiction over CREDILINQ, in connection with any legal proceedings, or as otherwise deemed necessary by us;
          </li>
          <li>Any other purpose to which your consent has been obtained, in compliance with our obligations under applicable laws, including to notify you at the time of obtaining your consent.</li>
        </ol>
      </li>
    </ol>
    </StyledLi>
    <StyledLi>
    Who We Disclose Your Personal and Business Data To
    <ol>
      <li>We may share (or permit the sharing of) your data with and/or transfer your data to third parties and/or our affiliates for the above-mentioned purposes. These third parties and affiliates, which may be located inside or outside your jurisdiction, include but are not limited to:
        <ol>
          <li>Service providers (such as agents, vendors, contractors and partners) in areas such as data analytics, financial analysis, business verification, market or consumer research, survey, customer service, information technology and website hosting;
          </li>
          <li>Their service providers and related companies; and 6.1.3. Courts, tribunals, enforcement agencies, governmental or regulatory authorities having jurisdiction over CREDILINQ.</li>
        </ol>
      </li>
      <li>
        In disclosing your data to them, we endeavor to ensure that the third parties and our affiliates keep your data secure from unauthorized access, collection, use, disclosure, processing or similar risks and retain your data only for as long as your data is needed to achieve the above-mentioned purposes detailed under Section 6 herein.
      </li>
    </ol>
    </StyledLi>
    <StyledLi>
    Third Party Sites
    <ol>
      <li>The Platform may contain links to other websites operated by other parties, such as our business affiliates, or other merchants. As regards to your data that was collected, maintained, stored and processed on these third party sites independent of any intervention of CREDILINQ (hereinafter, the “On-Third Party Site Transaction Data”), we disclaim any liability over the protection of your data which are stored and maintained on these third party sites. This disclaimer, however, does not extend to the data transmitted to and/or processed by CREDILINQ in accordance with clause 4.2 herein, wherein said data will be used, processed, stored, transmitted and disclosed by us in accordance with the provisions of this Terms and Conditions.</li>
      <li>Subject to the preceding clause, please note that even if the third party is affiliated with us, we have no control over these On-Third Party Site Transaction Data, which are governed by the third party site’s own separate privacy and data collection practices independent of us. We therefore have no responsibility or liability for the content, security arrangements and activities of these linked sites. You are advised to check on the applicable privacy policies of those websites to determine how they will handle any information they collect from you.</li>
    </ol>
    </StyledLi>
    <StyledLi>
    Data Transfer
    <ol>
      <li>We may transfer or permit the transfer of your data outside of your jurisdiction for any of the purposes set out in this Terms and Conditions. However, we will not transfer or permit any of your data to be transferred outside of such jurisdiction unless the transfer is in compliance with applicable laws, including, for example, to inform and obtain your consent on the countries to which your data may be transferred to and the applicable standards on data protection under the laws of such countries.</li>
    </ol>
    </StyledLi>
    <StyledLi>
    Withdrawal of Consent to Continued Use, Disclosure, Storing and/or Processing of Personal and Business Data
    <ol>
      <li>You may communicate the withdrawal of your consent to the continued use, disclosure, storing and/or processing of your data by contacting us using the contact details below, subject to the conditions and/or limitations imposed by applicable laws or regulations.</li>
      <li>Please note that if you communicate your withdrawal of your consent to our use, disclosure, storing or processing of your data for the purposes and in the manner as stated above or exercise your other rights as available under applicable local laws, we may not be in a position to continue to provide the Services to you or perform any contract we have with you, including our inability to render a report regarding the financial state of your business. In such case, we will not be liable in the event that we do not continue to provide the Services to, or perform our contract with you, or in case of our failure to render a report regarding your business. Our legal rights and remedies are expressly reserved in such an event.</li>
    </ol>
    </StyledLi>
    <StyledLi>
    Updating Your Personal and Business Data
    <ol>
      <li>It is important that the data you provide to us is accurate and complete for you to continue using the Platform and for us to provide the Services. You are responsible for informing us of changes to your data, or in the event you believe that the data we have about you is inaccurate, incomplete, misleading or out of date.</li>
      <li>You can update your data anytime by contacting us through the information stated below.</li>
      <li>We may take steps to share the updates to your data with third parties and our affiliates with whom we have shared your data if your data is still necessary for the above-stated purposes.</li>
    </ol>
    </StyledLi>
    <StyledLi>
    Accessing and Correcting Your Personal and Business Data
    <ol>
      <li>
      You may request information about your data which we have collected, or enquire about the ways in which your data may have been used, disclosed, stored or processed by us by contacting us using the contact details in Section 16 below. You may also request correction of any error or omission in your data which we have collected in the same way. In order to facilitate processing of your request, it may be necessary for us to request further information relating to your request. Where permissible under law, we may refuse such correction requests if deemed vexatious or unreasonable.
      </li>
      <li>
      Where permitted by applicable data protection laws, we reserve the right to charge a reasonable administrative fee for retrieving your personal data records. If so, we will inform you of the fee before processing your request.
      </li>
    </ol>
    </StyledLi>
    <StyledLi>
    Security of Your Personal and Business Data
    <ol>
      <li>
      To safeguard your data from unauthorized access, collection, use, disclosure, processing, copying, modification, disposal, loss, misuse, modification or similar risks during the course of your use of our Platform and/or Services, we have introduced appropriate administrative, physical and technical measures.
      </li>
      <li>
      You should be aware, however, that no method of transmission over the Internet or method of electronic storage is completely secure. While security cannot be guaranteed, we strive to protect the security of your information and are constantly reviewing and enhancing our information security measures. You are also advised to exercise caution with respect to the sharing of your data and your authentication / security details (such as passwords, credit card details, transaction details) outside of our Platform / Services.
      </li>
    </ol>
    </StyledLi>
    <StyledLi>
    Retention of Personal and Business Data
    <ol>
      <li>
      We will only retain your data for as long as we are either required or permitted to by law or as relevant for the purposes for which it was collected.
      </li>
      <li>
      We will cease to retain your data by securely disposing of the same, or remove the means by which the data can be associated with you through anonymisation, as soon as it is reasonable to assume that such retention no longer serves the purposes for which the data was collected, and is no longer necessary for any legal or business purpose.
      </li>
    </ol>
    </StyledLi>
    <StyledLi>
    Disclaimer Related to Report
    <ol>
      <li>The report that CREDILINQ will issue endeavors to provide you with a clear structure of your business health (i.e., financial status) using the data you provided to us (i.e., bank statements) and should be taken on “as-is” basis. CREDILINQ neither suggests business actions to improve your financial status nor provides forecasting of your business outcomes. We disclaim any recommendations or interpretations that may be derived from the report other than the provision of your current and actual financial standing (i.e., how to grow your business, or how to manage your business).</li>
    </ol>
    </StyledLi>
    <StyledLi>
    Questions, Feedback, Concerns, Suggestions or Complaints
    <ol>
      <li>If you have other concerns about our data protection / privacy practices, or wish to exercise any rights you may have under applicable law, please feel free to contact us at: support@credilinq.ai</li>
    </ol>
    </StyledLi>
    </StyledOl>
    </div>
  );
}
