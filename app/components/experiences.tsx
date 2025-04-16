import { getExperiences } from "../lib/data";
import ExperiencesList from "../components/experience-list";

export default async function Experiences() {
    const experiences = await getExperiences();
    return (
        <section>
            <ExperiencesList initialExperiences={experiences} />
        </section>
    );
}