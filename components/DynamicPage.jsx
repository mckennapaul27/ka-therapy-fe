import Navbar from '../components/Navbar';
import PageBanner from '../components/PageBanner';
import Footer from '../components/Footer';
import CalmingBlue from '../images/calming-blue.jpg';
import Link from 'next/link';
import MarkdownContent from './MarkdownContent';

const DynamicPage = ({ title, content, links }) => (
    <>
        <Navbar links={links} />
        <PageBanner pageTitle={title} pageImg={CalmingBlue} />
        <div className='text-container ptb-100'>
            <div className='container'>
                <h4>{title}</h4>
                <MarkdownContent body={content} />
                <Link href='/contact'>
                    <a
                        className='btn btn-primary'
                        style={{ marginTop: '40px' }}>
                        Contact Me
                    </a>
                </Link>
            </div>
        </div>

        <Footer />
    </>
);

export default DynamicPage;
