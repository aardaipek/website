import Footer from '../components/common/footer'
import Navbar from '../components/common/navbar'
import About from '../components/about'
import Quotes from '../components/quotes'
import { contents } from '../content'

export default function Index() {
  return (
    <div className="flex container mx-auto max-w-screen-md place-content-center">
      <div className="justify-center items-center">
        <Navbar />
        <SimpleAbout />
        <Contact />
        <About />
        <Quotes />
        <Footer />
      </div>
    </div>
  )
}

function SimpleAbout() {
  return (
    <>
      <div id="about">
        <h1 className="title underline text-base font-bold text-orange-800">
          {contents.about.title}
        </h1>
        <article className="my-2">{contents.simpleAbout.paragraph}</article>
        <article className="my-2">{contents.about.paragraph2}</article>
      </div>
    </>
  )
}

function Contact() {
  const contact = [
    {
      id: 1,
      link: 'mailto:ardaipek66@gmail.com',
      name: 'Mail',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64L12 9.548l6.545-4.91l1.528-1.145C21.69 2.28 24 3.434 24 5.457"
          />
        </svg>
      ),
    },
    {
      id: 2,
      link: 'https://www.linkedin.com/in/ardaipek/',
      name: 'Linkedin',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      link: 'https://open.spotify.com/user/aardaipek?si=ULcaUscDSAyzckU2TO25Rg',
      name: 'Spotify',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"
          />
        </svg>
      ),
    },
    {
      id: 4,
      link: 'https://twitter.com/aardaipek',
      name: 'X',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      link: 'https://github.com/aardaipek',
      name: 'Github',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="48"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
          />
        </svg>
      ),
    },
  ]
  return (
    <>
      <div id="contact" className="my-8">
        <ul className="flex text-gray-500 justify-center">
          {contact.map((card) => (
            <li className="transition ease-in-out hover:scale-110 ">
              <a href={card.link} target="_blank">
                <figure key={card.id} className="px-5">
                  {card.icon}
                </figure>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
