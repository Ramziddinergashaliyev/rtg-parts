import React from "react";
import "./leazy.scss";
import { OrbitProgress } from "react-loading-indicators";

const Leazy = () => {
    return (
        <div className="leazy">
            <div className="leazy__card">
                <OrbitProgress color="#fff" size="medium" text="" textColor="" />
            </div>
        </div>
    );
};

export default Leazy;
