import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import { ApolloError } from '@apollo/client'

type Contact = {
  name: string
  email: string
  message: string
}

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactForm: React.FC = () => {
  const formMethods = useForm()
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Contact Submitted')
      formMethods.reset()
    },
    onError: (error: ApolloError) => {
      toast.error(error.message)
    },
  })

  const handleSubmit = (data: Contact) => {
    createContact({ variables: { input: data } })
  }

  return (
    <>
      <Form
        formMethods={formMethods}
        onSubmit={handleSubmit}
        style={{
          display: 'grid',
        }}
      >
        <Label name="name" className="label" errorClassName="label error" />
        <TextField
          name="name"
          className="input"
          errorClassName="input error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="error-message" />

        <Label name="email" className="label" errorClassName="label error" />
        <TextField
          name="email"
          className="input"
          errorClassName="input error"
          validation={{
            required: true,
            pattern: /[^@]+@[^.]+..+/,
          }}
        />
        <FieldError name="email" className="error-message" />

        <Label name="message" className="label" errorClassName="label error" />
        <TextAreaField
          name="message"
          className="input"
          errorClassName="input error"
          validation={{ required: true }}
        />
        <FieldError name="message" className="error-message" />

        <Submit disabled={loading} className="button">
          Save
        </Submit>
      </Form>
      {error && (
        <h6
          style={{
            color: 'red',
          }}
        >
          {error.message}
        </h6>
      )}
    </>
  )
}

export default ContactForm
