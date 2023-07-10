import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Portfolio - Nomen Ama"}
                </title>
            </Head>
        </>
    )
}

export default PageHead