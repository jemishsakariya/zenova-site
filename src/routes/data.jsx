import NotFound from "../pages/not-found/NotFound";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import Projects from "../pages/projects/Projects";
import About from "../pages/about/About";
import Blogs from "../pages/blogs/Blogs";
import BlogDetail from "../pages/blogs/BlogDetail";
import ContactUs from "../pages/contact-us/ContactUs";

export const paths = {
  home: '/',
  notFound: '/404',
  services: '/services',
  projects: '/projects',
  about: '/about',
  blogs: '/blogs',
  blogDetail: '/blogs/:id',
  contactUs: '/contact-us'
};

export const routes = [
  {
    path: paths.home,
    element: <Home />,
    isPublic: true,
  },
  {
    path: paths.services,
    element: <Services />,
    isPublic: true,
  },
  {
    path: paths.projects,
    element: <Projects />,
    isPublic: true,
  },
  {
    path: paths.about,
    element: <About />,
    isPublic: true,
  },
  {
    path: paths.blogs,
    element: <Blogs />,
    isPublic: true,
  },
  {
    path: paths.blogDetail,
    element: <BlogDetail />,
    isPublic: true,
  },
  {
    path: paths.contactUs,
    element: <ContactUs />,
    isPublic: true,
  },
  {
    path: paths.notFound,
    element: <NotFound />,
    isPublic: true,
  },
];

