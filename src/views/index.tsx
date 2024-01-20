import SimpleAbout from "../components/simple-about";
import Footer from "../components/footer";
import Navbar from "../components/navbar"
import About from "../components/about";
import Contact from "../components/contact";
import Quotes from "../components/quotes";


export default function Index() {

    const works = [
        {
            id: 1,
            company: "Prisync",
            href: "#",
            description:
                "As a backend developer on a product-based team, my role involves developing new features and services while maintaining high standards of code quality and consistency. My primary programming languages are NodeJS and Typescript, and I also have experience with .Net Core. To support our development workflow, I frequently utilize a variety of AWS tools, including Lambda, EC2, and Cloudwatch. Additionally, I rely on various development tools such as RabbitMQ, Redis, PostgreSQL, and Docker. Also i work with 3rd party integrations on payment services. Such as Mastercard, IBBCard. In my position, I not only write code, but I also review pull requests from my colleagues to ensure that our codebase remains clean, maintainable, and efficient. I understand the importance of collaboration in software development and strive to work effectively with my team to achieve our common goals.Overall, my experience and skillset make me well-suited for working on complex, feature-rich applications that require a high level of expertise in backend development and cloud infrastructure.",
            startDate: "Jun 12, 2023",
            endDate: "-",
            datetime: "2020-03-16",
            title: "Backend Developer",
            current: true,
            techStack: ['NodeJs', 'Typescript', 'Nest Framework', 'Postgres', 'MySql'],
        },
        {
            id: 2,
            company: "Martı",
            href: "#",
            description:
                "As a backend developer on a product-based team, my role involves developing new features and services while maintaining high standards of code quality and consistency. My primary programming languages are NodeJS and Typescript, and I also have experience with .Net Core. To support our development workflow, I frequently utilize a variety of AWS tools, including Lambda, EC2, and Cloudwatch. Additionally, I rely on various development tools such as RabbitMQ, Redis, PostgreSQL, and Docker. Also i work with 3rd party integrations on payment services. Such as Mastercard, IBBCard. In my position, I not only write code, but I also review pull requests from my colleagues to ensure that our codebase remains clean, maintainable, and efficient. I understand the importance of collaboration in software development and strive to work effectively with my team to achieve our common goals.Overall, my experience and skillset make me well-suited for working on complex, feature-rich applications that require a high level of expertise in backend development and cloud infrastructure.",
            startDate: "Oct 14, 2021",
            endDate: "May 05, 2023",
            datetime: "2020-03-16",
            title: "Backend Developer",
            current: false,
            techStack: ['NodeJs', 'Typescript', 'Nest Framework', 'Postgres', 'AWS Lambda']
        },
        {
            id: 3,
            company: "PrimeApps",
            href: "#",
            description: "As a software developer on a product team, my primary responsibility was to design, develop, and maintain new features on our low-code platform. Leveraging advanced technologies such as Dotnet Core (v5-v6) and Angular, I crafted high-performing solutions that helped the product team meet its goals. Throughout the development process, I remained committed to ensuring the platform's reliability and stability by fixing any issues or bugs that arose. This required a keen attention to detail and a deep understanding of the platform's architecture and codebase. In addition to my technical contributions, I actively collaborated with other members of the product team to gather feedback, identify areas for improvement, and continuously iterate on our platform. This included conducting code reviews, participating in design discussions, and working closely with our quality assurance team to ensure that our software met the highest standards of quality.",
            startDate: "Oct 05, 2019",
            endDate: "Oct 03, 2021",
            datetime: "2020-03-16",
            title: "Software Developer",
            current: false,
            techStack: ['.Net Core', 'C#', 'Azure', 'Angular', 'Postgres']
        },
        {
            id: 4,
            company: "De Marke Labs",
            href: "#",
            description: "Throughout my experience as an software developer, I have honed my skills in developing highly functional applications for customers. My tech stack includes advanced technologies like Ionic Framework (v3-v4), Angular (v4-v5), JS, HTML, and CSS. To deliver highly reliable and scalable applications, I also used Firebase (Functions and DB).",
            startDate: "Apr 01, 2019",
            endDate: "Sep 18, 2021",
            datetime: "2020-03-16",
            title: "Software Developer",
            current: false,
            techStack: ['Javascript', 'Angular', 'Ionic Framework',]
        },
    ];
    return (
        <div className="flex container mx-auto max-w-screen-md place-content-center">
            <div className="justify-center items-center">
                <Navbar/>
                <SimpleAbout/>
                <Contact/>
                <About/>
                <Quotes/>
                <Footer/>
            </div>
        </div>
    )
}