import { Footer } from './components/Footer'
import { Contract } from './components/Contract'
import { Testimonial } from './components/Testimonial'
import { Courses } from './components/Courses'
import { Team } from './components/Team'
import { About } from './components/About'
import { Feature } from './components/Feature'
import { Main } from './components/Main'
import { Navigation } from './components/Navigation'
import { FormTest } from './components/form-test/FormTest'

export default function Home() {
  return (
    <>
      <Navigation />
      <Main />
      <Feature />
      <About />
      <Team />
      <Courses />
      <Testimonial />
      <FormTest />
      <Contract />
      <Footer />
    </>
  );
}
