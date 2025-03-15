import { getExperiences } from "../lib/data";

export default async function Experience() {
    const experiences = await getExperiences();
    return (
        <section className="py-8">
            <h1 className="justify-self-center text-xl">Experiences</h1>
            <div className="max-w-3xl mx-auto px-4">
                {experiences.map(experience => (
                    <div key={experience.id} className="mb-8 pb-6 border-b border-gray-200">
                        <h3 className="font-semibold">{experience.company_name}</h3>
                        <div className="mt-1 mb-3">
                            <p className="text-sm">
                                {new Date(experience.date_hired).toLocaleDateString()} - 
                                {experience.date_resigned
                                    ? new Date(experience.date_resigned).toLocaleDateString()
                                    : ' Present'}
                            </p>
                        </div>
                        <ul className="mt-2 list-disc pl-5 space-y-1">
                            {experience.descriptions.map(desc => (
                                <li key={desc.id}>{desc.description}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}