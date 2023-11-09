import AboutPage from "./views/About";
import HomePage from "./views/HomePage";
import ContactPage from "./views/Contact";
import Terms from "./views/Terms";
import Policy from "./views/Policy";

const routes = [
    {
        title: 'Home',
        href: '/home',
        component: HomePage,
        children: [],
        index:true
    },
    {
        title: 'Our team',
        href: '/about',
        component: AboutPage,
        children: [],
        index:true
    },
    {
        title: 'Blog',
        href: '/blog',
        component: () => <>Blog</>,
        children: [],
        index:true
    },
    {
        title: 'Contact us',
        href: '/contact',
        component: ContactPage,
        children: [],
        index:false
    },
    {
        title: 'Terms and Conditions',
        href: '/terms',
        component: Terms,
        children: [],
        index:false
    },
    {
        title: 'Private Policy',
        href: '/policy',
        component: Policy,
        children: [],
        index:false
    }
]

export default routes;