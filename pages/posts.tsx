import Head from "next/head";
import { MainLayout } from "../components/MainLayout";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MyPost } from "../interfaces/post";
import { NextPageContext } from "next";

interface PostPageProps {
    posts: MyPost[]
}

export default function Posts({ posts: serverPosts } : PostPageProps) {
    const [posts, setPost] = useState(serverPosts);

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/`);
            const data = await response.json();
            setPost(data);
        }

        if (!serverPosts) {
            load();
        }
    }, []);

    if (!posts) {
        return <MainLayout>
            <h1>Loading...</h1>
        </MainLayout>
    }

    return (
        <MainLayout title={"Posts page"}>
            <Head>
                <title>Posts page |  Next course</title>
            </Head>
            <h1>Posts page</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainLayout >
    )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return { posts: null }
    }

    const response = await fetch('http://localhost:4200/posts');
    const posts: MyPost[] = await response.json();
    return { posts };
}

// export async function getServerSideProps(context) {
//     const response = await fetch('http://localhost:4200/posts');
//     const posts = await response.json();
//     return { props: { post } };
// }