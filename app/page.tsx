import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Header from './Components/Header'
import Skills from './Components/Skills'
import Certifications from './Components/Certifications'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import Animation from './Components/Animation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header/>
      <div className=' flex justify-center'>
            <div className=' m-4 indent-8 '>An enthusiastic and plan-driven individual(and a software engineer and an AWS Certified Solutions Architect) with an interest in advanced technologies and cash flow. Knowledge and experience in a variety of technologies and fields such as Ethical Hacking, AWS Cloud, Database, Linux, Web3, Blockchain, IoT, Japanese as a Third Language, eCommerce, ChatBot with ManyChat, and such. The reason behind such a wide variety of interests and experiences is personal growth and finding new opportunities.</div>
      </div>
      <Animation/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}
