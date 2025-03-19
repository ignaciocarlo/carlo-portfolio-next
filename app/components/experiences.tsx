import { getExperiences } from "../lib/data";
import { calculateDuration } from "../utils/date-utils";

export default async function Experiences() {
    const experiences = await getExperiences();
    return (
        <section>
            <h1 className="text-xl font-semibold mb-5">Experiences</h1>
            <div className="max-w-3xl mx-auto">
                {experiences.map((experience, index) => (
                    <div key={experience.id} className="mb-8 pb-6 relative">

                        <div className="absolute left-1 top-0 h-full w-1 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full transform -translate-x-1/2"></div>

                        <div className="absolute left-1 top-1 w-4 h-4 bg-white border-2 border-purple-500 rounded-full transform -translate-x-1/2 shadow-md z-10"></div>
                        <div className="absolute left-1 top-1 w-4 h-4 bg-purple-200 rounded-full transform -translate-x-1/2 animate-ping opacity-75" style={{ animationDuration: '3s', animationIterationCount: 'infinite' }}></div>

                        <div className="pl-10 mb-1">
                            <h3 className="text-lg font-medium">{experience.company_name}</h3>
                            <p className="text-sm">{experience.position}</p>
                        </div>
                        <div className="pl-10 mt-1 mb-3">
                            <div className="flex items-center">
                                <p className="text-sm">
                                    {new Date(experience.date_hired).toLocaleDateString()} -
                                    {experience.date_resigned
                                        ? new Date(experience.date_resigned).toLocaleDateString()
                                        : ' Present'}
                                </p>
                                <p className="text-gray-400 text-sm italic ml-2">
                                    ({calculateDuration(experience.date_hired, experience.date_resigned)})
                                </p>
                            </div>
                        </div>
                        <ul className="pl-10 mt-2 list-disc ml-5 space-y-1">
                            {experience.descriptions.map(desc => (
                                <li key={desc.id}>{desc.description}</li>
                            ))}
                        </ul>

                        {/* No connector line after the last item - also aligned with the line */}
                        {index === experiences.length - 1 && (
                            <div className="absolute left-1 bottom-0 w-3 h-3 bg-purple-500 rounded-full transform -translate-x-1/2"></div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}