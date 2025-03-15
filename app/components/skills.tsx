import { getSkills } from "../lib/data"
import Image from "next/image";

export default async function Skills() {
    const skills = await getSkills();

    return (
        <section className="mb-12">
            <h1 className="text-xl font-semibold mb-5">Skills</h1>
            <p className="mb-5">The professional toolkit of technologies, frameworks, and development environments I leverage to deliver robust solutions.</p>
            <div className="flex flex-row flex-wrap gap-3">
                {
                    skills.map(skill => (
                        <Image
                            className="invert brightness-0"
                            key={skill.title}
                            src={skill.src}
                            alt={skill.title}
                            width={50}
                            height={50}
                        />
                    ))
                }
            </div>
        </section>
    )
}