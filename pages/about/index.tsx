import React from 'react';
import Router from 'next/router'
import { MainLayout } from '../../components/MainLayout';

interface AboutProps{
    title: string
}

export default function About({title}: AboutProps) {
    return (
        <MainLayout title={"About page"}>
            <h1>{title}</h1>
            <button onClick={() => { Router.push('/') }}>
                Go back to home
            </button>
        </MainLayout>

    )
}
About.getInitialProps = async () => {
    const response = await fetch("http://localhost:4200/about");
    const data = await response.json();

    return{
        title: data.title
    }
}