import Head from "next/head"

const Container = (props) => {

    return (
        <div className="d-flex justify-content-center">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap" rel="stylesheet" />
            </Head>
            <div className="phone overflow-hidden bg-one">
                {props.children}
            </div>
            <style jsx>{`
                .phone {
                    width: 360px;
                    height: 750px;
                    border-radius: 20px;
                    border: 1px solid black;
                }
            `}</style>
        </div>
    )
        
}

export default Container