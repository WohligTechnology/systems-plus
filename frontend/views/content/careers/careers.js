myApp.controller('CareersCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http, $uibModal) {
    $scope.template = TemplateService.getHTML("content/careers/careers.html");
    TemplateService.title = "Careers"; // This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.showdata = 'ba';
    $scope.oneAtATime = true;
    $scope.status = {
        isCustomHeaderOpen: false,
        isFirstOpen: true,
        isFirstDisabled: false
    };
    //tab
    $scope.changetab = function (data) {
        $scope.showdata = data;
    }

    $scope.career = [{
            para1: "Systems Plus provides freedom at work & the opportunity to develop along with the organization. The work environment is filled with challenging and motivating projects and assignments to provide an evolving ecosystem in which individuals are able to realise their professional and personal aspirations."
        },
        {
            para1: "We are always looking for people with talent, interest and the drive to excel. We invite you to be part of adiverse team of thinkers and doers and this is your chance to take your career to the next level."
        },

        {
            para1: "We are always looking for people with talent, interest and the drive to excel. We invite you to be part of a diverse team of thinkers and doers and this is your chance to take your career to the next level."
        }
    ]

    //apply now modal

    $scope.applymodal = function () {
        $uibModal.open({
            animation: true,
            templateUrl: "views/modal/applynow.html",
            scope: $scope,
            size: 'md'
        });
    };

    
//uib-accordian

$scope.careerdetail = [
                {
                "list":"5+ years Experience JD: Groovy/Grails/Java J2EE.",
                 },
                 {
                    "list":"MySQL and Mongo DB. ",
                 },
                 {
                    "list":"XML - incl. generation (DOM/SAX), Reading and Loading into DB, XSD development.",
                 },
                 {
                    "list":"Web services: both SOAP and Rest.",
                 },
                 {
                    "list":"Tomcat and Solr.",
                 },
                 {
                    "list":"Excellent communication skills (written and verbal).",
                 },
                 {
                    "list":"At least 1 year project experience in Groovy grails.",
                 },
              
                ]
                

                $scope.devops = [
                   
                    {
                        "list":"JD: Experience in Big Data(Hadoop ecosystems) Installation and optimization",
                    }
                    ,
                    {
                        "list":"Extensive AWS Experience: S3, EC2, EMR, Lambda, CloudWatch, dynamodb, redshift, Glue, Kinesis, security, networking etc. ",
                    }
                    ,
                    {
                        "list":"Experience in setting up and managing Pub/Sub systems like kinesis.",
                    }
                    ,
                    {
                        "list":"Experience in Terraform, Ansible and AWS Cloudformation scripting.",
                    }
                    ,
                    {
                        "list":"Experience on development and monitoring tools like AWS CloudWatch, Dynatrace, Terraform, Ansible, git(BitBucket) and Jenkins.",
                    }
                    ,
                    {
                        "list":"Experience in setting up CI/CD pipelines",
                    }

                ]
                     
                $scope.bigdata = [
                    {
                        "list" :"Current and detailed knowledge and experience in real-time messaging systems using Spark Streaming, Event Messaging Systems (kinesis, kafka) and Big data sql engines like Presto/Impala." ,
                    },
                    {
                        "list" : "Experience in Python or Scala.",
                    },
                    {
                        "list" : "Experience of creating real-time data pipelines.",
                    },
                    {
                        "list" : "Experience of optimising Spark jobs.",

                    }
                    ,
                    {
                        "list" : "Experience in writing complex sql."
                    }
                ] 
                $scope.bigdata2 = [
                    {
                        "list" : "Experience on AWS EMR and related services.",
                    },
                    {
                        "list" : "Experience of Productionizing data science algorithms.",
                    },
                    {
                        "list" : "Experience in optimising read and writes into Big Data Sql engines.",
                    },
                    {
                        "list" : "Experience in PL/SQL."
                    }
                ]
                
                $scope.cicd = [
                    {
                        "list" : "Deep technical knowledge of collaboration and software deployment tools such as GitHub, GoCD, Jenkins, Artifactory, JIRA, and Confluence.",
                    },
                    {
                        "list" : "Environment Management processes and procedures.",
                    },
                    {
                        "list" : "A working knowledge of AWS, Windows, Oracle, SQL Server, MongoDB and Unix.",
                    },
                    {
                        "list" : "Strong technical awareness and knowledge of latest testing methodologies and tools.",
                    },
                    {
                        "list" : "Excellent planning and organising skills are necessary as the role often requires tasks to be prioritised, reprioritised and re-negotiated as unforeseen events occur.",
                    },
                    {
                        "list" : "A good manager of people, with excellent communication skills at all levels internal and external to the department.",
                    },
                    {
                        "list" : "Comprehensive people leadership / management skills.",
                    },
                    {
                        "list" : "Ability to deliver under pressure and to tight timescales. ",
                    },
                    {
                        "list" : "Strong analytical mind-set with the ability to extract relevant information from documentation, system data, clients and colleagues and analyse the gathered information .",
                    },
                    {
                        "list" : "Maintenance and support of pre-production environments considering future implications beyond the immediate requirement which may involve the creation of new approaches and procedures to design, maintain or solve environment issues .  ",
                    },
                    {
                        "list" : "Ability to manage pre-production environment scheduling & resourcing.",
                    },
                ]
                
                $scope.cicd2 = [
                    {
                        "list" : "A proven CI/CD and Agile background with a solid understanding and experience of the Software Development Lifecycle, testing methodologies and techniques. "
                    },
                    {
                        "list" : "Strong stakeholder management skills enabling you to convince and support other teams along the transformation journey. "
                    },
                    {
                        "list" : "Strong team leadership skills and experience."
                    },
                    {
                        "list" : "Proven experience in software delivery toolsets. "
                    },
                    {
                        "list" : "Proven experience in Infrastructure as Code using the AWS platform. "
                    },
                    {
                        "list" : "Proven experience in managing and delivering into Unix and Windows based environments."
                    },
                   
                ]

                $scope.cicd3 = [
                    {
                        "list" : "Octopus Deploy. "
                    },
                    {
                        "list" : "AWS. "
                    },
                    {
                        "list" : "Jenkins. "
                    },
                    {
                        "list" : "GoCD. "
                    },
                   
                    
                ]
                $scope.cicd4 = [
                    {
                        "list" : "Oracle. "
                    },
                    {
                        "list" : "SQL Server. "
                    },
                    
               ]
                $scope.cicd5 = [
                    {
                        "list" : "JIRA. "
                    },
                    {
                        "list" : "Confluence. "
                    },
                    {
                        "list" : "GIT. "
                    },
               ]
                $scope.cicd6 = [
                    {
                        "list" : "Developer Background. "
                    },
                    {
                        "list" : "Operations Experience. "
                    },
                    {
                        "list" : "NoSQL (eg Mongo DB). "
                    },
                    ]
                    $scope.cicd7 = [
                        {
                            "list" : "Experience of building either Microsoft .NET and Java application stacks. "
                        },
                        {
                            "list" : "Windows Server and/or Linux/UNIX exposure. "
                        },
                        {
                            "list" : "Experience of Agile development methodologies. "
                        },
                        {
                            "list" : "Proven experience in working with VCS solutions such as Git. "
                        },
                        {
                            "list" : "Experience with DevOps/CI/CD technologies such as GitHub, Jenkins, Octopus Deploy, Packer, Terraform, Artifactory and Ansible. "
                        },
                        {
                            "list" : "Ability to follow processes and procedures (governance). "
                        },
                        {
                            "list" : "Strong team player, with excellent communication skills. "
                        },
                        {
                            "list" : "Willingness to understand new technologies, acquire new skills and attend internal/external training sessions. "
                        },
                        {
                            "list" : "Ability to deliver under pressure and to tight timescales. "
                        },
                        {
                            "list" : "Good analytical and problem solving skills, with attention to detail. "
                        },
                        {
                            "list" : "Ability to deliver under pressure and to tight timescales. "
                        },
                        {
                            "list" : "Desired - Experience of using JIRA and Confluence. "
                        },
                        {
                            "list" : "Desired - Experience of working in financial services. "
                        },
                        ]
    
                        $scope.dotnet = [
                            {
                                "list" : "ASP.Net MVC. "
                            },
                            {
                                "list" : "Web API. "
                            },
                            {
                                "list" : "Experience with RESTful web services. "
                            },
                            {
                                "list" : "Entity Framework. "
                            },
                            {
                                "list" : "Sql Server 2008. "
                            },
                            {
                                "list" : "Jquery. "
                            },
                            ]

    $scope.userapply = function (data) {
        console.log("$$$$$$$$$",data)
        NavigationService.ContactSave(data, function (data) {
        });
    };

});