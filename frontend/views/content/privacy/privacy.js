myApp.controller('PrivacyCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/privacy/privacy.html");
    TemplateService.title = "Privacy"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();

     $scope.terms = [
         {
             "head" : "I. Personal Information we may collect and process:",
             "para1" : "For the purposes of this privacy statement, ‘Personal Information’ is any data which relates to an individual who may be identified from that data, or from a combination of a set of data, and other information which is or may be in possession of Systems Plus.",
             "para2" : "In general, you may browse our website without providing any Personal Information about yourself. However, certain information such as your IP address, demographics, your computers’ operating system, and browser type may be collected in order to provide better usability, troubleshooting, site maintenance, and to understand which parts of the website are visited and how frequently. In order to provide relevant content based on your preferences, when you register to our website, we require you to provide us with certain Personal Information such as your name, email address, telephone number, and other details. While accessing certain sections of the Systems Plus website such as Careers, you may also be required to provide Personal Information for Systems Plus to process the corresponding request."
         },
         {
            "head" : "II. Consequences of not providing Personal Information:",
            "para1" : "If you choose not to provide your Personal Information that is mandatory to process your request, we may not be able to provide the corresponding service.",
           
        },
        {
            "head" : "III. Data recipients, transfer, and disclosure of Personal Information:",
            "para1" : "Systems Plus does not share your Personal Information with third parties for marketing purposes without seeking your prior permission. Systems Plus will seek your consent prior to using or sharing Personal Information for any purpose beyond the requirement for which it was originally collected.",
          
          "para2" : "We may share your Personal Information within Systems Plus or with any of its subsidiaries, business partners, service vendors, authorized third-party agents, or contractors located in any part of the world for the purposes of data processing, storage, or to provide a requested service or transaction, after ensuring that such entities are contractually bound by data privacy obligations.",
          "para3" : "When required, Systems Plus may disclose Personal Information to external law enforcement bodies or regulatory authorities, in order to comply with legal obligations."
        },
       {
           "head" : "IV. Use of cookies:",
           "para1" : "Cookies are small text files that, like most other Web servers, we place in your device that you use to access our website. This is done to recognize your device during a session or in your future visits to our website, primarily in order to provide better user experience.",
             "para2" : "Types of cookies used:",
             "head2" :"Session cookie :",
             "para4" : "Session cookies remain only as long as a browsing session is active, and are intended to avoid user inconvenience during browsing. These cookies allow websites to link the actions of a user during a browser session and expire at the end of the browsing session. Session cookies also assist the user in navigating the website, and allow the user to access secure parts of the webpage when logged in.",
             "head3" : "Persistent cookie :",
             "para5" : "Persistent cookies are stored on a user’s device even after termination of a browsing session. It helps in recalling the preferences or actions of the user. Persistent cookies are used for a variety of purposes such as retaining the visitor’s language and regional preference(s) at the end of each browsing session. We may use services of third-party analytics service provider to analyze cookies to carry out a behavioral analysis in order to enhance user experience and convenience, and also to provide targeted and relevant content to visitors.",
             "para6" : "Depending on the type and settings of your browser, cookies may be accepted by default. You may change the settings of your browser to delete existing cookies or prevent future cookies from being automatically accepted. If you disable cookies, certain parts and functions of our website may not be available. You can learn more about cookies at www.aboutcookies.org",
        },
        {
            "head" : "V. Access, correction, objection of your Personal Information:",
            "para1" : "Depending on local law, you may access, update, or correct your Personal Information that we hold, including your profile and preferences. You may do so in the corresponding sections where such information was provided. If you have difficulty in updating or accessing your Personal Information as stated above, you may contact us at info@sptr.co",
          
          
        },
        {
            "head" : "VI. Data security:",
            "para1" : "Systems Plus adopts reasonable and appropriate security practices and procedures that includes administrative, physical security, and technical controls in order to safeguard your Personal Information.",
          
          
        },
        {
            "head" : "VII. Data retention:",
            "para1" : "Systems Plus may retain your Personal Information as long as there is a business requirement, or if otherwise required under applicable laws.",
          
          
        },
        {
            "head" : "VIII. Linked websites.",
            "para1" : "Systems Plus may provide links to third-party websites and services. However, Systems Plus is not responsible for the privacy statements, practices, or the contents of such third-party websites.",
          
          
        },
        {
            "head" : "IX. How to contact us.",
            "para1" : "If you have any questions regarding our privacy practices or this privacy statement, you may contact us at: Contact address: SYSTEMS PLUS TRANSFORMATIONS LLP, E-12-A, Commerce Centre, Tardeo, Mumbai – 400034 Maharashtra, India.Phone: +91 22 2660 8201 Email: info@sptr.co.",
          
          
        },
        {
            "head" : "X. Updates to this privacy statement",
            "para1" : "Systems Plus may change the data privacy practices and update this privacy statement as and when the need arises, and the same will be made available on the website. But our commitment to protect the privacy of website users will continue to remain.",
          
          
        },
     ]

});