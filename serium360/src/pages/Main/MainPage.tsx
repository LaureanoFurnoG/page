import Banner from './sections/banner/banner'
import About from './sections/about/about'
import "./style.css"
import Services from './sections/services/services'
import Contact from './sections/contact/Contact'
import Faq from './sections/faqs/Faqs'
function MainPage() {

  return (
    <>
      <Banner />
      <section id='aboutMain'>
        <About />
      </section>
      <section id='servicesMain'>
        <Services />
      </section>
      <section id='faqsMain'>
        <Faq/>
      </section>
      <section id='contactMain'>
        <Contact />
      </section>
    </>
  )
}

export default MainPage
