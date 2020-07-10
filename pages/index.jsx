import Link from 'next/link';
import Head from 'next/head';

export default function index() {
    return <>
        <Head>
            <title>Next.js</title>
            <meta name="keywords" content="next, js, react" />
            <meta name="description" content="This is yt tutor for next" />
            <meta charSet="UTF-8" />
        </Head>
        <h1>Hello Next.js</h1>
        <p><Link href={'/about'}><a>About</a></Link></p>
        <p><Link href="/posts"><a>Posts</a></Link></p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit molestias cupiditate.</p>
    </>
}