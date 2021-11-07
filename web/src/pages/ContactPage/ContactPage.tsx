import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import ContactForm from 'src/components/Contact/ContactForm'

const ContactPage = () => {
  const { page } = useParams() as {
    page: string
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact description" />
      <h1>Contact</h1>
      <ContactForm page={parseInt(page)} />
    </>
  )
}

export default ContactPage
