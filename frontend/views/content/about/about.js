myApp.controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/about/about.html");
    TemplateService.title = "About Us"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();


    //leadership

    $scope.leadership = [{
            "id":1,
            "img": "img/leadership/Vivek_Desai1.jpg",
            "name": "Vivek Desai",
            "designation": "CEO & Director",
            "subliner": "To aspire, inspire and achieve against all odds, with transparency and integrity.",
        },
        {
            "id":2,
            "img": "img/leadership/Anand_Hosabettu1.jpg",
            "name": "Anand Hosabettu",
            "designation": "Director – Sales",
            "subliner": "With positiveness, we can overcome challenges in a transparent and trustworthy fashion for our stakeholders.",
        },
        {
            "id":3,
            "img": "img/leadership/Atul_Nipankar1.jpg",
            "name": "Atul Nipankar",
            "designation": "Director – Operations",
            "subliner": "To deliver value to the business in most efficient and transparent manner by building high performance teams.",
        }
        ,
        {
            "id":4,
            "img": "img/leadership/Pinaki_Sengupta1.jpg",
            "name": "Pinaki Sengupta",
            "designation": "Practice Manager – Consulting Services",
            "subliner": "Constant and never ending quest to consult practical, advance &amp; creative solutions for Business opportunities.",
        },
        
    ]
    $scope.leadership2 = [
        
               {
               
                "id":5,
                "img": "img/leadership/Chirag.jpeg",
                "name": "Chirag Shah",
                "designation": "Head – Digital Solutions",
                "subliner": "Dynamic, innovative &amp; aggressive approach to new business development in Digital Solutions.",
            },
            {
                "id":6,
                "img": "img/leadership/Pandurang_Deoka1.jpg",
                 "name": "Pandurang Deokar",
                "designation": "Group Finance Controller",
                "subliner": "Effective Implementation of All types of Controls makes Organisation Healthier by all Means.",
            },
            {
                "id":7,
                "img": "img/leadership/Ramendra_Shukla.jpg",
                "name": "Ramendra Shukla",
                "designation": "Director – Big Data & Analytics",
                "subliner": "Conceptualising and delivering intelligent analytics / machine learning solutions.",
            },
            {
                "id":8,
                "img": "img/leadership/Rohit_Mathur.jpg",
                "name": "Rohit Mathur",
                "designation": "Director – AI & Data Sciences",
                "subliner": "Developing technology / knowledge tie-ups, thought leadership across sectors with Machine Learning and Artificial Intelligence solutions.",
            },
        
    ]

    

});