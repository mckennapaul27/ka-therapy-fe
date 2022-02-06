import DynamicPage from '../../components/DynamicPage';
import { getBlogBySlug, getBlogPaths } from '../../lib/server-api';
// import DynamicPage from '../components/DynamicPage';
import {
    getGlobalData,
    getPageBySlug,
    getPagePaths,
} from '../../lib/server-api';

export default function DynamicHelp({ globalData, id, title, slug, content }) {
    return (
        <DynamicPage
            title={title}
            content={content}
            links={globalData.data.attributes.navbarLink}
        />
    );
}

export async function getStaticPaths({}) {
    const { data } = await getBlogPaths();
    const paths = data.pages.data.map((a) => ({
        params: { slug: a.attributes.slug ? a.attributes.slug : false },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const globalData = await getGlobalData();

    const { data, error } = await getBlogBySlug({ slug: params.slug });
    const {
        id,
        attributes: { title, content, slug, createdAt },
    } = data.pages.data[0];
    return {
        props: {
            globalData: globalData.data.global,
            id,
            title,
            slug,
            content,
            createdAt,
        },
    };
}
