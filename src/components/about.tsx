import { contents } from "../content";

export default function About() {
    return (
        <>
            <div id="work">
                <div>
                    <p className="text-base font-semibold text-orange-800">{contents.about.title}</p>
                </div>
                <article className="my-4">
                    {contents.about.paragraph}
                </article>
                <article className="mb-4">
                    {contents.about.paragraph2}
                </article>
            </div>
        </>
    );
}
