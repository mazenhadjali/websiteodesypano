import React from "react";
import Article from "../components/article";

function Home() {
    return (
        <React.Fragment>
            <div className="container items-center py-2">
                <Article key={"a"} title={"test1"} body={"test body1"} link={"jneafn"} />
                <Article key={"b"} title={"test2"} body={"test body2"} link={"jneafn"} />
                <Article key={"c"} title={"test3"} body={"test body3"} link={"jneafn"} />
                <Article key={"d"} title={"test4"} body={"test body4"} link={"jneafn"} />
            </div>
        </React.Fragment >
    )
}

export default Home;