import Navbar from '../components/Navbar';
import PageBanner from '../components/PageBanner';
import BlogGridThree from '../components/BlogGridThree';
import Footer from '../components/Footer';
import { getBlogs, getDisorders, getGlobalData } from '../lib/server-api';

const Blog = ({ globalData, blogs }) => {
    return (
        <>
            <Navbar links={globalData.data.attributes.navbarLink} />
            <PageBanner pageTitle='Blog' />
            <BlogGridThree blogs={blogs} />
            <Footer />
        </>
    );
};

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();

    const { data, error } = await getBlogs();
    const blogs = data.pages.data;
    return {
        props: {
            globalData: globalData.data.global,

            blogs,
        },
    };
}

export default Blog;
