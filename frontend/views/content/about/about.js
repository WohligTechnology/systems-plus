myApp.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/about/about.html");
    TemplateService.title = "about"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();


    //leadership

    $scope.leadership = [{
            "id": 1,
            "img": "img/leadership/Vivek_Desai1.jpg",
            "name": "Vivek Desai",
            "link": "",
            "designation": "CEO & Director",
            "subliner": "To aspire, inspire and achieve against all odds, with transparency and integrity.",
        },
        {
            "id": 2,
            "img": "img/leadership/Anand_Hosabettu1.jpg",
            "name": "Anand Hosabettu",
            "designation": "Director – Sales",
            "subliner": "With positiveness, we can overcome challenges in a transparent and trustworthy fashion for our stakeholders.",
        },
        {
            "id": 3,
            "img": "img/leadership/Atul_Nipankar1.jpg",
            "name": "Atul Nipankar",
            "designation": "Director – Operations",
            "subliner": "To deliver value to the business in most efficient and transparent manner by building high performance teams.",
        },
        {
            "id": 4,
            "img": "img/leadership/Pinaki_Sengupta1.jpg",
            "name": "Pinaki Sengupta",
            "designation": "Practice Manager – Consulting Services",
            "subliner": "Constant and never ending quest to consult practical, advance &amp; creative solutions for Business opportunities.",
        },

    ]
    $scope.leadership2 = [

        {

            "id": 5,
            "img": "img/leadership/Chirag.jpeg",
            "name": "Chirag Shah",
            "designation": "Head – Digital Solutions",
            "subliner": "Dynamic, innovative &amp; aggressive approach to new business development in Digital Solutions.",
        },
        {
            "id": 6,
            "img": "img/leadership/Pandurang_Deoka1.jpg",
            "name": "Pandurang Deokar",
            "designation": "Group Finance Controller",
            "subliner": "Effective Implementation of All types of Controls makes Organisation Healthier by all Means.",
        },
        {
            "id": 7,
            "img": "img/leadership/Ramendra_Shukla.jpg",
            "link": " https://www.linkedin.com/in/ramendrashukla/",
            "name": "Ramendra Shukla",
            "designation": "Director – Big Data & Analytics",
            "subliner": "Conceptualising and delivering intelligent analytics / machine learning solutions.",
        },
        {
            "id": 8,
            "img": "img/leadership/Rohit_Mathur.jpg",
            "name": "Rohit Mathur",
            "designation": "Director – AI & Data Sciences",
            "subliner": "Developing technology / knowledge tie-ups, thought leadership across sectors with Machine Learning and Artificial Intelligence solutions.",
        },

    ]
    $scope.leaderdetail = [{
            "id": 1,
            "img": "img/leadership/Vivek_Desai1.jpg",
            "name": "Vivek Desai",
            "link": "https://www.linkedin.com/in/vivek-desai-159a07/ ",
            "designation": "CEO & Director",
            "desc1": "Vivek, is the CEO & Director of Systems Plus Transformations, a global software services and consulting company. Vivek is focused on the growth markets which include UK, US , Far East and Asia-Pacific. Vivek has an extensive 26 years experience in the IT Industry.",
            "desc2": "Prior to his current role, Vivek was with Sonata Software for 24 years. Vivek has successfully spearheaded multiple portfolios within the organization and has enabled diversification in terms of industry verticals. Vivek was instrumental in establishing and successfully leading Sonata’s Europeans Operations. Vivek expanded Sonata’s footprint in Continental Europe and in the process established partnerships with Hybris and SAP. Under his leadership Sonata’s European’s operations contributed 50%+ to the International Services revenue. He played a key role in Sonata’s accelerated growth in Europe and key business lines.",
            "desc3": "In 2006, Vivek took on additional responsibility as Director at TUI InfoTec Gmbh, to successfully lead its operations in Germany.",
            "desc4": "He is a Trustee of the Desai Charitable Foundation, which is supporting education of underprivileged girl students.",
            "desc7": "Vivek holds a degree in Commerce from Bombay University and a MBA in Marketing and International Business from Sydenham Institute of Management."

        },
        {
            "id": 2,
            "img": "img/leadership/Anand_Hosabettu1.jpg",
            "name": "Anand Hosabettu",
            "link": "https://www.linkedin.com/in/anandhosabettu/ ",
            "designation": "Director – Sales",
            "desc1": "Anand is the Sales Director based out of UK. He drives new business development as well as relationships with existing customers in UK, Europe and APAC region. His 19 years of experience spans across industry verticals like Finance, Pharma, Travel and Public sector.",
            "desc2": "Prior to joining SystemsPlus, Anand was with Sonata Software for more than 16 years where he played multiple roles such as Technical Consultant, Project Manager, Pre-sales and Account Manager. His last assignment was to manage and grow one of the large account in the travel sector based in UK.",
            "desc3": "Anand has done his masters degree in computers from Mangalore University.",
            "desc7": "As an ardent cricket fan, he is an active member of local cricket club playing Sunday league matches. He is also involved in voluntary organisations helping local communities."

        },
        {
            "id": 3,
            "img": "img/leadership/Atul_Nipankar1.jpg",
            "name": "Atul Nipankar",
            "link": "https://www.linkedin.com/in/atulnipankar/",
            "designation": "Director – Operations",
            "desc1": "Atul is versatile professional with over 20 years’ experience in outsourcing services and software engineering. Is an inspirational leader who has effectively managed teams across business horizontals and verticals.            ",
            "desc2": "An expert in consulting, global delivery management, has successfully managed large and complex programs for several global organizations.",
            "desc3": "Has successfully worked with different cultures and gained expertise in building high performance teams.",
            "desc4": "Prior to joining Systems Plus, has hold leadership positions with IBM and GlobalLogic.",
            "desc5": "Has international experience, closely worked with the clients in the South East Asian region, Europe and the USA.",
            "desc6": "Holds Graduate degree in Computer Science with Masters in Computer Management from Pune University.",
            "desc7": "In his free time, Atul likes to read books, travel places and spend quality time with family."

        },
        {
            "id": 4,
            "img": "img/leadership/Pinaki_Sengupta1.jpg",
            "name": "Pinaki Sengupta",
            "link": "https://www.linkedin.com/in/pinakisengupta/ ",
            "designation": "Practice Manager – Consulting Services",
            "desc1": "Pinaki is Practice Manager – Consulting Services at Systems Plus Transformations. Pinaki is focused on bringing creative solutions with disciplined approach for introducing and managing change to organizations. Pinaki’s past experiences with business transformation services of – SAP/Oracle enables him to advocate “Strategic thinking” discipline throughout client organization, from strategy to implementation, and across multiple roles. ",
            "desc2": "Pinaki had extensively worked on Complex Strategy execution, Enterprise Performance Management, Governance, Risk and Compliance Programs. Pinaki’s passion now is to build strategic models for client organisations to realize the value of big data & analytics.",
            "desc7": "Pinaki is a Prince2® practitioner and a MBA- IT and MBA – Finance from university of Pune."

        },
        {
            "id": 5,
            "img": "img/leadership/Chirag.jpeg",
            "name": "Chirag Shah",
            "designation": "Head – Digital Solutions",
            "desc1": "Chirag Shah heads the Digital Solutions at Systems Plus Transformations, a global software services and consulting company. He is a technology consultant focused on combining high level strategy development services with global implementation. He is responsible for customer relation, business development, alliance partnerships and overall digital solution operations. ",
            "desc2": "Chirag has experience in diverse areas of designing and developing ranging from mobility solutions, web portal solutions, custom ERP and E-Commerce platforms, social media marketing and campaigns.",
            "desc3": "With first-hand experience & know how of delivering enterprise class technology solutions to global customers Chirag’s foremost objective is of developing user-centric software, building rich user experience that are intuitive for a user.",
            "desc7": "Chirag holds a management degree in Marketing from IES College, Mumbai University. ",
        },
        {
            "id": 6,
            "img": "img/leadership/Pandurang_Deoka1.jpg",
            "name": "Pandurang Deokar",
            "link": "https://www.linkedin.com/in/pandurang-deokar-430094163/ ",
            "designation": "Group Finance Controller",
            "desc1": "Pandurang is Group Finance Controller and responsible for entire Finance Function of SPTR Group Companies, Globally. Pandurang also manages Procurement Function & oversee Administrative Function principally, for the Group.",
            "desc2": "In addition to that, he manages the organisation’s emerging business accelerator unit and other special initiatives dedicated to building new solutions for our clients.",
            "desc3": "As a 5-year veteran of SPTR, he remains passionate about delivering on Financial Trackers / Guidelines so as to utilize it as an effective tool to achieve desired goals and maintain Financial Harmony at all level of the organisation.",
            "desc4": "Pandurang has gained 23 years of experience in Finance Function of IT / Software Industry and prior to his current role, he served as Finance Controller, HOD Finance, Sr. Manager Finance to the various organisations includes Thermax Group Companies, Cognizant Group Companies, Geometric, Onward and Symbiosis.",
            "desc5": "He obtained his Master’s degree from the BMCC Pune and MBA from University of Pune.",
            "desc7": "Beyond his professional life he loves listening, following Indian Classical Music."
        },
        {
            "id": 7,
            "img": "img/leadership/Ramendra_Shukla.jpg",
            "name": "Ramendra Shukla",
            "link": "https://www.linkedin.com/in/ramendrashukla/",
            "designation": "Director – Big Data & Analytics",
            "desc1": "Ramendra has over 13 years of business consulting experience on strategy, analytics and technology in financial services, healthcare and infrastructure domains. At Systems Plus Transformations, Ramendra leads strategic engagements, machine learning solutions and big data analytics services. An avid problem solver, Ramendra has been instrumental in conceptualizing and delivering intelligent solutions for clients across sectors and geographies.",
            "desc2": "Prior to Systems Plus Transformations, Ramendra led India operations of PLUS Expressways and held senior positions in Infosys, i2 Technologies, FoA and Concept Consulting.",
            "desc7": "Ramendra is an MBA from Indian School of Business, Hyderabad and BE from BITS, Pilani.",

        },
        {
            "id": 8,
            "img": "img/leadership/Rohit_Mathur.jpg",
            "name": "Rohit Mathur",
            "link": "https://in.linkedin.com/in/rohit-mathur-118366b6",
            "designation": "Director – AI & Data Sciences",
            "desc1": "Rohit has been in the area of technology development, investment banking for healthcare, pharmaceutical and life sciences sectors for over 10 years. With his distinct knowledge and experience, he has taken hold of responsibilities for developing technology / knowledge tie-ups, thought leadership across sectors. Prior to associating with Systems Plus Transformations, he was part of investment banking experts at Ernst & Young and Centrum Capital. ",
            "desc2": "At Systems Plus Transformations, Rohit has set up Machine Learning and Artificial Intelligence practice wherein multiple projects have been delivered to clients across sectors and geographies. He has been instrumental in developing Cingulariti which is an Omni channel bot and assistant platform for large enterprises.",
            "desc7": "Rohit has a Bachelors degree in Mechanical Engineering from IIT Kanpur and a MBA in Finance and Marketing from ISB Hyderabad."
        }
    ];


    //leader modal

    $scope.openVivekModal = function (id) {

        $scope.leaderdata = _.find($scope.leaderdetail, function (leader) {
            return leader.id == id;
        })
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/leader.html",
            scope: $scope,
            size: 'lg'
        });
    };

});