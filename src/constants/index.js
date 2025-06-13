const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 12, suffix: "+", label: "Months of Learning & Practice" },
    { value: 500, suffix: "+", label: "DSA Problems Solved" },
    { value: 5, suffix: "+", label: "Personal Projects Built" },
    { value: 3, suffix: "+", label: "Tech Stacks Explored (MERN, SQL, etc.)" },
];


const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];
const abilities = [
    {
        imgPath: "/images/logos/node.png",
        title: "Strong Coding Skills",
        desc: "Proficient in Java, C++, and JavaScript with a solid foundation in Data Structures, Algorithms, and problem-solving.",
    },
    {
        imgPath: "/images/logo2.png",
        title: "Full-Stack Development",
        desc: "Experienced in building scalable web apps using the MERN stack, REST APIs, and modern frontend tools like React and Tailwind CSS.",
    },
    {
        imgPath: "/images/logo3.png",
        title: "Database Management",
        desc: "Skilled in designing efficient databases with MySQL, MongoDB, and handling backend logic with Node.js and Express.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Java Developer",
        imgPath: "/images/logos/java.png",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Java Developer",
        modelPath: "/models/java.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Suman consistently delivered clean, scalable solutions with a sharp eye for detail and user experience. His work stands out for its quality and performance.",
        imgPath: "/images/logo.png  ",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "February 2024 – May 2024",
        responsibilities: [
            "Built a feature-rich e-commerce platform using React, TailwindCSS, Redux, and Express.js",
            "Implemented authentication, product filtering, cart, and order management features.",
            "Ensured responsiveness and fast load times across devices",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
    {
        review: "Suman’s full-stack knowledge enabled seamless backend-frontend integration. He is a fast learner and dependable developer.",
        imgPath: "/images/lama.png",
        logoPath: "/images/logo2.png",
        title: "Full Stack Developer",
        date: "January 2025 - May 2025",
        responsibilities: [
            "Created a blog platform with admin dashboard, post CRUD, and authentication.",
            "Built REST ful APIs using Node.js + MongoDB and connected them with a React frontend.",
            "Handled file uploads, error handling, JWT-based login, and responsive design.",
        ],
    },
    {
        review: "Suman built a custom Git-like version control system using Java, demonstrating strong problem-solving skills and a deep understanding of core software development concepts such as file tracking, versioning, and command-line tools.",
        imgPath: "/images/githubbb.png",
        logoPath: "/images/githubb.png",
        title: "Java Developer — Git System Project",
        date: "June 2025 - Present",
        responsibilities: [
            "Designed and implemented a lightweight Git-like version control system in Java from scratch.",
            "Built core commands such as `init`, `add`, `commit`, `log`, and `status` using file I/O and hashing.",
            "Handled efficient data storage using SHA-1 hashing and serialization techniques.",
            "Simulated real-world Git behavior to understand internals like staging areas and commit trees."
        ]
    }
    ,
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        link: "https://www.instagram.com/sumn_lf/",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
        link: "https://www.facebook.com/suman.ranjan.1276/",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
        link: "https://x.com/Acee_Spades",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/suman-ranjan-profile/",
    },
    {
        name:"github",
        imgPath: "/images/githubb.png",
        link: "https://github.com/suman-ranjan",
    }
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};