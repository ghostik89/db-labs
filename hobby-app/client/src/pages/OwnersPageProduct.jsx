import React from "react";
import {Header} from "../components/Header";
import {OwnersProductComments} from "../components/OwersProductComments";
import {OwnersProductInfo} from "../components/OwnersProductInfo";

export const OwnersPageProduct = () => {
    return(
        <>
            <Header/>
            <div className={"container"}>
                <OwnersProductInfo/>
                <OwnersProductComments/>
            </div>
        </>
    )
}