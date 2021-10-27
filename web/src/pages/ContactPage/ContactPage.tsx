import { MetaTags } from '@redwoodjs/web'
import ContactForm from 'src/components/Contact/ContactForm'

const ContactPage = () => {
  return (
    <>
      <MetaTags title="Contact" description="Contact description" />
      <h1>Contact</h1>
      <ContactForm />
    </>
  )
}

export default ContactPage
