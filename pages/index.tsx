import Link from 'next/link';
import { MainLayout } from '../components/MainLayout';

export default function index() {
    return (
        <MainLayout title={"Home page"}>
            <h1>Hello Next.js</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href="/posts"><a>Posts</a></Link></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi suscipit molestias cupiditate.</p>
        </MainLayout>
    )
}