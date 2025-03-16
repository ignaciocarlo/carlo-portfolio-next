import Image from 'next/image'
import { inter } from '../ui/fonts'
import Socials from './socials'

export default function Hero() {
    return (
        <section>
            <Image
                className='block mx-auto border-1 rounded-xl rounded'
                src={'/images/Carlo.png'}
                width={170}
                height={200}
                alt='Carlo Ignacio'
            />
            <div className={`text-center font-semibold ${inter.className} mb-2`}>
                <p className='mt-3 font-semibold text-2xl'>Carlo Ignacio</p>
                <p className='text-xs'>Software Developer</p>
            </div>
            <Socials />
        </section>
    )
}