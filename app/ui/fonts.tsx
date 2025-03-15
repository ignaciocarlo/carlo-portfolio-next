import { Inter, Poppins, Roboto } from 'next/font/google'

export const roboto = Roboto({
    weight: '300',
    subsets: ['latin'],
    display: 'swap',
})

export const poppins = Poppins({
    weight: '400',
    subsets: ['latin']
})

export const inter = Inter({
    weight: '400',
    subsets: ['latin']
})