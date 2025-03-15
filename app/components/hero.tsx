import Image from 'next/image'
import { inter } from '../ui/fonts'
import Socials from './socials'

export default function Hero() {
    return (
        <section>
            <Image
                className='justify-self-center border-1 rounded-xl rounded'
                src={'/images/Carlo.png'}
                width={170}
                height={200}
                alt='Carlo Ignacio'
            />
            <div className={`text-center font-semibold ${inter.className}`}>
                <p className='mt-3 text-2xl'>Carlo Ignacio</p>
                <p className='text-xs'>Software Developer</p>
            </div>
            <Socials />
        </section>
    )
}