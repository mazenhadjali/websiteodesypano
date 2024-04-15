import React from "react";
import Article from "../components/article";
import { data } from "../data";

function Home() {

    return (
        <React.Fragment>
            <div className="container py-2">
                {
                    data.map(({ key, title, link, body, rtl }) => <Article key={key} title={title} link={link} body={body} rtl={rtl} />)
                }
            </div>
        </React.Fragment >
    )
}

export default Home;