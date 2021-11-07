import type { Contact, ContactPagination } from 'types/graphql'
import { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Pagination from 'src/components/Pagination/Pagination'

const CONTACTS_PER_PAGE = 7

export const beforeQuery = ({ page }: { page: number }) => {
  return {
    variables: {
      page: page,
      fetchPolicy: 'network-only',
    },
  }
}

export const QUERY = gql`
  query ContactPagination($page: Int!) {
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

export const Success = ({
  contactPage,
  variables,
}: CellSuccessProps<ContactPagination>) => {
  return (
    <>
      <div className="font-bold text-xl my-6">
        All contacts count is: {contactPage.count}
      </div>
      <ul>
        {contactPage.contacts &&
          [...contactPage.contacts]
            .sort((a, b) => parseInt(b.createdAt) - parseInt(a.createdAt))
            .map((item: Contact, index) => {
              return (
                <li key={item.id}>
                  <br />
                  <b className="pr-1">
                    {CONTACTS_PER_PAGE * variables.page -
                      (CONTACTS_PER_PAGE - 1) +
                      index}
                    :
                  </b>
                  {item.id}
                  <br />
                  {item.email}
                  <br />
                  {item.name}
                  <br />
                  {item.message}
                  <br />
                  {new Date(parseInt(item.createdAt)).toUTCString()}
                </li>
              )
            })}
      </ul>

      <Pagination count={contactPage.count} page={variables.page} />
    </>
  )
}
