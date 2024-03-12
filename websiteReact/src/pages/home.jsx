import React from "react";
import Carousel from "../components/carousel";
import HomeMenu from "../components/homeMenu";
import RightNavigation from "../components/rightNavigation";
import Article from "../components/article";

function Home() {
    return (
        <React.Fragment>
            <Carousel />
            <HomeMenu />
            <div className="container mx-auto flex flex-wrap">

                <div className="md:w-3/4 sm:w-full">
                    <div className="container items-center py-2">
                        <Article key={"a"} title={"test1"} body={"test body1"} link={"jneafn"} />
                        <Article key={"b"} title={"test2"} body={"test body2"} link={"jneafn"} />
                        <Article key={"c"} title={"test3"} body={"test body3"} link={"jneafn"} />
                        <Article key={"d"} title={"test4"} body={"test body4"} link={"jneafn"} />
                    </div>
                </div>
                <div className="md:w-1/4 sm:w-full sm:mx-auto">
                    <RightNavigation />
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home;