import Link from "next/link";
import Image from "next/image";
import { getSocials } from "../lib/data";

export default async function Socials() {
    const socials = await getSocials();
    
    return(
        <div className="flex flex-row gap-3 justify-center">
        {socials.map((social) => (
            <div key={social.id}>
                <Link href={social.link} target="_blank">
                    <Image
                        className="dark:invert brightness-0"
                        src={social.src}
                        alt={social.title}
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
        ))}
    </div>
    )
}