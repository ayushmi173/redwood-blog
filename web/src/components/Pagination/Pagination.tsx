import { Link, routes } from '@redwoodjs/router'

const CONTACTS_PER_PAGE = 7

type Props = {
  count: number
}

const Pagination: React.FC<Props> = ({ count }: Props) => {
  return (
    <div className="flex flex-row min-w-min mt-10">
      {[...Array(Math.ceil(count / CONTACTS_PER_PAGE))].map((_, index) => {
        return (
          <Link
            key={index}
            to={routes.contact({ page: index + 1 })}
            className="!bg-blue-400 text-center font-bold w-6 mx-2 cursor-pointer"
          >
            {index + 1}
          </Link>
        )
      })}
    </div>
  )
}

export default Pagination
