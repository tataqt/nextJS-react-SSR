import React from 'react';
import Router from 'next/router'

export default function About() {
    return (
        <React.Fragment>
            <h1>About Page</h1>
            <button onClick={() => { Router.push('/') }}>
                Go back to home
            </button>
        </React.Fragment>

    )
}