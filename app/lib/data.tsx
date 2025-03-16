import postgres from 'postgres';
import { Experience, Skill, Social } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require', prepare: false });

export async function getSocials() {
    const socials = await sql<Social[]>
                        `SELECT * FROM socials`;

    return socials;
}

export async function getSkills() {
    const skills = await sql<{
        id: number;
        title: string;
        src: string;
    }[]>
                        `SELECT * FROM skills`
                        
    return skills;
}

export async function getExperiences() {
    const results = await sql<{
        id: number;
        company_name: string;
        position: string;
        date_hired: Date;
        date_resigned: Date | null;
        is_current_company: boolean;
        description_id: number | null;
        description: string | null;
    }[]>`
        SELECT e.id, e.company_name, e.position, e.date_hired, e.date_resigned, e.is_current_company, 
               ed.id as description_id, ed.description
        FROM experiences AS e
        LEFT JOIN experiences_description AS ed ON ed.experiences_id = e.id
        ORDER BY e.date_hired DESC
    `;
    
    if (!results || results.length === 0) {
        return [];
    }
    
    // Explicitly type the experience map
    const experienceMap: Record<number, Experience> = {};

    results.forEach(row => {
        if (!experienceMap[row.id]) {
            experienceMap[row.id] = {
                id: row.id,
                company_name: row.company_name,
                position: row.position,
                date_hired: row.date_hired,
                date_resigned: row.date_resigned,
                is_current_company: row.is_current_company,
                descriptions: [],
            };
        }

        if (row.description_id) {
            experienceMap[row.id].descriptions.push({
                id: row.description_id,
                description: row.description!,
            });
        }
    });

    return Object.values(experienceMap);
}
