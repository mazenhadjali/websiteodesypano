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
                    <div className="container flex flex-col items-center py-2">
                        <Article key={"a"} title={"test"} body={"test body"} link={"jneafn"} />
                    </div>
                </div>
                <div className="md:w-1/4 sm:w-full">
                    <RightNavigation />
                </div>
            </div>
        </React.Fragment >
    )
}

export default Home;