import { contents } from '../content'

export default function About() {
  return (
    <>
      <div className="min-h-screen flex flex-col sm:flex-row p-4 sm:p-10">
        <div className="container mx-auto flex flex-col space-y-8 w-full">
          <p className="text-base font-semibold text-orange-800">
            {contents.about.title}
          </p>
          <article className="my-4">{contents.about.paragraph}</article>
          <article className="mb-4">{contents.about.paragraph2}</article>
        </div>
      </div>
    </>
  )
}
