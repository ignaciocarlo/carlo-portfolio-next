import Link from "next/link";
import { getSocials } from "../lib/data";

export default async function Socials() {
    const socials = await getSocials();
    return(
        <div className="flex flex-row gap-3 justify-center">
            {socials.map((social) => (
                <div key={social.id}>
                    <Link href={social.link} target="_blank">{social.title}</Link>
                </div>
            ))}
        </div>
    )
}