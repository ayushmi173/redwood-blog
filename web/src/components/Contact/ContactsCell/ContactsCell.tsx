import type { ContactPage } from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useQuery } from '@redwoodjs/web'

import Pagination from 'src/components/Pagination/Pagination'

export const QUERY = gql`
  query ContactPage($page: Int) {
    contactPage(page: $page) {
      contacts {
        id
        name
        email
        message
        createdAt
      }
      count
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const beforeQuery = ({ page }) => {
  console.log('before query', page)
  Contacts()
  page = page ? parseInt(page, 10) : 1

  return { variables: { page } }
}

export const Contacts = () => {
  const { data } = useQuery(QUERY)

  console.log('fefe', data)
}

export const Success = ({
  contactPage,
}: CellSuccessProps<{ contactPage: ContactPage }>) => {
  return (
    <>
      <div className="font-bold text-xl my-6">
        All contacts count is: {contactPage.count}
      </div>
      <ul>
        {contactPage.contacts.map((item) => {
          return (
            <li key={item.id}>
              {item.id}, {item.email}, {item.name}, {item.message},
              {item.createdAt}
            </li>
          )
        })}
      </ul>

      <Pagination count={contactPage.count} />
    </>
  )
}
