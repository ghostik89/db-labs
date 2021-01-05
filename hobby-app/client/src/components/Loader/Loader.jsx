import React from "react";
import './loader.css'

export const Loader = () => (
    <div className="preloader-wrapper big active center-loader">
        <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
                <div className="circle"/>
            </div>
            <div className="gap-patch">
                <div className="circle"/>
            </div>
            <div className="circle-clipper right">
                <div className="circle"/>
            </div>
        </div>
    </div>
)