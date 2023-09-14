import AboutPage from "./views/About";
import HomePage from "./views/HomePage";
import ContactPage from "./views/Contact";

const routes = [
    {
        title: 'Home',
        href: '/home',
        component: HomePage,
        children: []
    },
    {
        title: 'About us',
        href: '/about',
        component: AboutPage,
        children: []
    },
    {
        title: 'Blog',
        href: '/blog',
        component: () => <>Blog</>,
        children: []
    },
    {
        title: 'Contact us',
        href: '/contact',
        component: ContactPage,
        children: []
    }
]

export default routes;