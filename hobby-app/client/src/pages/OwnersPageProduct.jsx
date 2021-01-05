import React from "react";
import {Header} from "../components/Header/Header";
import {OwnersProductComments} from "../components/Comments/OwersProductComments";
import {OwnersProductInfo} from "../components/OwnersProductInfo";

export const OwnersPageProduct = () => {
    return(
        <>
            <Header/>
            <div className={"container"}>
                <OwnersProductInfo/>
                <div className="divider"/>
                <OwnersProductComments/>
            </div>
        </>
    )
}