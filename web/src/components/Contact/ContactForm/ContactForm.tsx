import {
  Form,
  Label,
  TextField,
  TextAreaField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { toast } from '@redwoodjs/web/toast'
import { useMutation, useQuery } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'
import { ApolloError } from '@apollo/client'
import React from 'react'
import ContactCell, { QUERY } from 'src/components/Contact/ContactCell'
import { navigate, routes } from '@redwoodjs/router'

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

type Props = {
  page: number
}

const ContactForm: React.FC<Props> = ({ page }) => {
  const formMethods = useForm()
  const [createContact, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
      navigate(routes.contact())
    },
    onError: (error: ApolloError) => {
      toast.error(error.message)
    },
  })

  const { refetch } = useQuery(QUERY, {
    variables: {
      page: page || 1,
    },
  })

  const handleSubmit = async (data: Contact) => {
    await createContact({ variables: { input: data } })
    refetch()
  }

  return (
    <>
      {!loading && !error ? (
        <Form
          formMethods={formMethods}
          onSubmit={handleSubmit}
          className="flex flex-col items-center"
          config={{
            mode: 'onBlur',
          }}
          error={error}
        >
          <Label
            name="Name"
            className="label mt-3"
            errorClassName="label error"
          />
          <TextField
            name="name"
            className="input border-2 border-gray-900 w-3/6 py-2"
            errorClassName="input error border-red-600 border-2 px-2 w-3/6 py-2"
            validation={{ required: true }}
          />
          <FieldError name="name" className="error-message" />

          <Label
            name="Email"
            className="label mt-3"
            errorClassName="label error"
          />
          <TextField
            name="email"
            className="input border-2 border-gray-900 w-3/6 py-2"
            errorClassName="input error border-red-600 border-2 w-3/6 py-2"
            validation={{
              required: true,
              pattern: /[^@]+@[^.]+\..+/,
            }}
          />
          <FieldError name="email" className="error-message" />

          <Label
            name="Message"
            className="label mt-3"
            errorClassName="label error"
          />
          <TextAreaField
            name="message"
            className="input border-2 border-gray-900 w-3/6 py-2 h-4/6"
            errorClassName="input error border-red-600 border-2 px-2 w-3/6 py-2"
            validation={{ required: true }}
          />
          <FieldError name="message" className="error-message" />

          <Submit
            disabled={loading}
            className="button bg-green-400 text-white mt-5 px-5 py-2 font-semibold rounded-md"
          >
            Save
          </Submit>
        </Form>
      ) : (
        <h6>Loading.......</h6>
      )}
      {error && (
        <h6
          style={{
            color: 'red',
          }}
        >
          {error.message}
        </h6>
      )}
      <ContactCell page={page || 1} />
    </>
  )
}

export default ContactForm
