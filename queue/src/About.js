import React from 'react'
import './About.css'


window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    console.log(loader);
});

export const About = () => (
    <div className="about">
        <div className="row">
            <div className="member">
                <div><br/></div>
                <h2>&#9992; About us</h2>
                <div><br/></div>
                <h4>We are making a queue</h4>
                <div><br/></div>
                <div><br/></div>
            </div>
        </div>
    </div>
)
