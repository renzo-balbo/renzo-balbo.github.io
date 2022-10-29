const { createApp } = Vue

createApp({
    data() {
        return {
            projects: [
                {
                    id: 2,
                    name: "SkyWalkies",
                    type: "E-commerce",
                    creators: ["Renzo Balbo", "Adriano Balbo", "Franco Novoa", "Adrian Rojas", "Aluminé Romero", "Tomas Grunfeld"],
                    creationTime: "80 hours",
                    creationDate: "September 30, 2022",
                    technologies: ["Html", "Css", "JavaScript", "Bootstrap", "Vue.Js", "Java", "Spring Boot", "Gradle", "Git"],
                    repository: "https://github.com/renzo-balbo/skyWalkies",
                    description: "This is an e-commerce for a shoe store. Inspired by the design of Louis Voitton & Nike's Air Force we developed a web application where you can register (requiring you to access your email to confirm your registration), login, select and purchase any pair of shoes that the page have in stock. You can also customize a random generated avatar to fit your personality and the admin account can loan, re-stock, disable or re-enable products. SkyWalkies was the last project that we did for MindHub LA. They asked us to make an e-commerce from scratch in one week and then make an exposition of the site selling it as a product.",
                    images: {
                        mobile1: './assets/img/skywalkies/indexSkwMobile.png',
                        mobile2: './assets/img/skywalkies/cartMobile.png',
                        desktop: './assets/img/skywalkies/indexSkw.png'
                    }
                },
                {
                    id: 1,
                    name: "RLBP Bank",
                    type: "Homebanking",
                    creators: ["Renzo Balbo"],
                    creationTime: "+300 hours",
                    creationDate: "September 15, 2022",
                    technologies: ["Html", "Css", "JavaScript", "Bootstrap", "Vue.Js", "Java", "Spring Boot", "Gradle", "Git"],
                    repository: "https://github.com/renzo-balbo/homebanking",
                    description: "This is a fully functional homebanking capable of creating and saving new clients, generate accounts, cards, make transaction and apply for pre-approved loans. Also you can generate a PDF with the transaction between 2 desired dates. This is the project in which I started using Java and Spring Boot in order to generate RESTFull APIs and maintain web applications in MindHub LA.",
                    images: {
                        mobile1: './assets/img/rlbpBank/index.png',
                        mobile2: './assets/img/rlbpBank/transactionMobile.png',
                        desktop: './assets/img/rlbpBank/landing.png'
                    }
                }
            ],
            certifications: [
                {
                    id: 2,
                    name: "Enterprise Design Thinking",
                    issuedBy: "IBM",
                    issuedIn: "October 3, 2022",
                    description: "The earner has acquired knowledge of applying Enterprise Design Thinking and its value. As a Practitioner, the badge earner finds opportunities to try it out in their every day work.",
                    badgeImage: "./assets/img/badges/enterpriseDesignThinkingPractitioner.png",
                    link: "https://www.credly.com/badges/a1f77261-6276-4d48-8a9d-33dfda2534e5/public_url"
                },
                {
                    id: 1,
                    name: "Java Full Stack Web Developer",
                    issuedBy: "MindHub",
                    issuedIn: "October 12, 2022",
                    description: "This person is capable of developing responsive web applications using HTML5, CSS3, Javascript, Bootstrap, Vue Js. and JAVA, through the most used frameworks and integrating third-party APIs. Likewise, it is capable of dealing with a client's requirement, analyzing it, working as a team and carrying out its development in a timely manner, complying with the best market practices and using agile methodologies.",
                    badgeImage: "./assets/img/badges/javaFullStackDeveloper.png",
                    link: "https://www.credly.com/badges/b08ac688-852f-4535-b23c-7cd35b9b77fa/public_url"
                }
            ],
        }
    },
    created() { },
    beforeMount() { },
    mounted() {

    },
    beforeUpdate() { },
    updated() { },
    methods: {
        resumeProjectDescription(description) {
            description = description.slice(0, 300)
            return description
        },
        resumeCertificationDescription(description) {
            description = description.slice(0, 150)
            return description
        }

    },
    computed: {},
}).mount('#app')

