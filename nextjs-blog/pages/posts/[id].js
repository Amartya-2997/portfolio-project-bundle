import Layout from '../../components/layout';
import Head  from 'next/head';
import { getPostData, getPostIds } from '../../lib/file-parser';
import utilStyles from '../../styles/utils.module.css';



export default function Post({ postData }) {
    return <Layout>
    <Head>
        <title>{postData.title}</title>
    </Head>
    <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: postData.processedHtml }} />
      </article>
    </Layout>;
};


export async function getStaticProps({ params }) {
    const postData = await getPostData(params?.id);
    return {
        props: {
            postData
        }
    };
}


export async function getStaticPaths() {
    const postIdList = getPostIds();
    return {
        paths:postIdList,
        fallback: false
    };

};

