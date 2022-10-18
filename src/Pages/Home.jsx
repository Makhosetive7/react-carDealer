import Nav from '../components/Nav/Nav'
import Hero from '../components/Hero/HeroPage'
import SocialMediaStatistics from '../components/Social_media_stats/SocialMediaStatistics'
import Testimonials from '../components/Testimonials/Testimonials'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
      <div>
        <Nav />
        <Hero />
        <SocialMediaStatistics />
        <Testimonials />
        <Footer />
      </div>


  )
}

export default Home