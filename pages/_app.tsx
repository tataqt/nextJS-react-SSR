// import styles from './../styles/main.css'
import NextNprogress from 'nextjs-progressbar';

export default function MyApp({
    Component,
    pageProps
}) {
    return <>
        <NextNprogress
            color="yellow"
            startPosition={0.3}
            stopDelayMs={200}
            height="3"
        />
        <Component {...pageProps} />
        {/* <style global jsx>
            {`
                body{
                    font-family: 'Roboto', sans-serif;
                }
            `}
        </style> */}
    </>

}