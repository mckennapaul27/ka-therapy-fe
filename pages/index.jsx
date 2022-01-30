import About from '../components/About';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';
import MainBanner from '../components/MainBanner';
import Navbar from '../components/Navbar';
import { getGlobalData, getHomePage } from '../lib/server-api';

export default function Home({ globalData, page }) {
    return (
        <>
            <Navbar links={globalData.data.attributes.navbarLink} />
            <MainBanner
                heading={page.heading}
                subheading={page.subheading}
                buttonText={page.buttonText}
            />
            <About
                heading={page.aboutHeading}
                content={page.aboutContent}
                buttonText={page.aboutButtonText}
                image={page.aboutImage}
            />
            {/* <LatestNewsSlider /> (BLOG / TESTIMONIAL SECTION) */}
            <ContactInfo
                heading={page.contactHeading}
                subheading={page.contactSubHeading}
            />
            <Footer />
        </>
    );
}

export async function getStaticProps() {
    const globalData = await getGlobalData();

    const { data, error } = await getHomePage();
    return {
        props: {
            globalData: globalData.data.global,

            page: data.homePage.data.attributes,
        },
    };
}
