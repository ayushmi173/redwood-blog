import { useParams } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ContactForm from 'src/components/Contact/ContactForm'
import ContactsCell from '../../components/Contact/ContactsCell'

const ContactPage = () => {
  const { page } = useParams() as {
    page: string
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact description" />
      <h1>Contact</h1>
      <ContactForm />
      <h1>All Contacts</h1>
      <ContactsCell page={parseInt(page)} />
    </>
  )
}

export default ContactPage
