import postgres from 'postgres';
import { Experience, Social } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function getSocials(): Promise<Social[]> {
    const socials = await sql<{
        id: number;
        title: string;
        link: string;
    }[]>`SELECT * FROM socials`;
    
    return socials;
}


export async function getExperiences(): Promise<Experience[]> {
    const results = await sql<{
        id: number;
        company_name: string;
        date_hired: Date;
        date_resigned: Date | null;
        is_current_company: boolean;
        description_id: number | null;
        description: string | null;
    }[]>`
        SELECT e.id, e.company_name, e.date_hired, e.date_resigned, e.is_current_company, 
               ed.id as description_id, ed.description
        FROM experiences AS e
        LEFT JOIN experiences_description AS ed ON ed.experiences_id = e.id
        ORDER BY e.id
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
