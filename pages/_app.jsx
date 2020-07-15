import styles from './../styles/main.css'

export default function MyApp({
    Component,
    pageProps
}) {
    return <>
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