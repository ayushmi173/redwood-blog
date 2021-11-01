import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home description" />
      <h1>Welcome to Blog using Redwood js</h1>
      <p>We are simply creating crud operation with post and contact</p>
      <h1 className="font-extrabold text-red-500 font-sans uppercase text-7xl">
        jonny
      </h1>
    </>
  )
}

export default HomePage
