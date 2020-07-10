import Head from "next/head";
import { MainLayout } from "../components/MainLayout";

export default function Posts() {
    return (
        <>
            <MainLayout title={"Posts page"}>
                <title>Post page |  Next course</title>
            </MainLayout>
            <h1>Posts</h1>
        </>
    )
}