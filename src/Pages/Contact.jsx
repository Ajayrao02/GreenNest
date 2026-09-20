import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    })
  }, [])

  return <div data-aos="fade-up">Contact</div>
}

export default Contact
