import { Set, Router, Route } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import HeaderLayout from './layouts/Header/Header'

const Routes = () => {
  return (
    <Router>
      <Set wrap={HeaderLayout}>
        <Set wrap={PostsLayout}>
          <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
          <Route path="/posts/{id}/edit" page={PostEditPostPage} name="editPost" />
          <Route path="/posts/{id}" page={PostPostPage} name="post" />
          <Route path="/posts" page={PostPostsPage} name="posts" />
        </Set>

        <Route path="/" page={HomePage} name="home" />
        <Route path="/contact" page={ContactPage} name="contact" />
        <Route path="/contact/page={page}" page={ContactPage} name="contactPage" />

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
