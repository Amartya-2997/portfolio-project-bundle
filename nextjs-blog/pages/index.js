import Head from 'next/head';
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { readFileFromDisk } from '../lib/file-parser';


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Amartya is tryign to learn next js to get a job</p>
        <p>
          I will be coding more of SPA apps in coming future following {' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>


      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
              <br/>
              <Link href={"/posts/"+id}>Go to article</Link>
            </li>
          ))}
        </ul>
      </section>

    </Layout>
  );
}

export async function getStaticProps(){
  const allPostsData= readFileFromDisk();
  return {
    props:{
      allPostsData
    }
  }

}



