import React, { Component, useEffect, useRef } from 'react'
import './About.css'
import './Load.css'
import $ from 'jquery';

const helpHoursURL = "https://github.com/SamLab17/HelpHours";


class About extends Component {

    render() {
        return (
            <div className="about">
                <div className="text text-center">
                    <div className="square center">
                        <div class="content">
                            <img src="https://picsum.photos/300/300/?random" />
                        </div>
                        <div class="loader-wrapper">
                            <span class="loader"><span class="loader-inner"></span></span>
                        </div>

                        <script>
                            $(window).on("load",function(){$(".loader-wrapper").fadeOut("slow")});
                        </script>
                        <h2> About the Project</h2>
                        <div>The COVID-19 pandemic has been a source of pain for teachers and TAs just as much as it has been for students.
                        As online classes have become increasingly popular not only from the pandemic but as a whole, it's increasingly necessary for TAs to have centralized & organized methods of managing help hours.
                        At UT Austin, some of the UTCS TAs have already written <a href={helpHoursURL}>a simple queue website</a> for managing online help hours; although this website is effective in its goal, we believe it has some shortcomings that we can improve.
                        Using it as inspiration, we developed a queue app that not only offers functions for enqueuing / dequeuing of students like the aforementioned application, but also includes two primary additional features:</div>
                        <div>1. The ability for students to tag their problem (i.e. "1-on-1" or "style check"). This simplifies help hours, as TAs can handle some students en masse if they have similar issues.</div>
                        <div>2. The ability for students to play a simple multiplayer game while waiting for queues. We noticed that occasionally, help hour queues reached up to forty people, lasting four or five hours to get through. To keep students entertained, we figured a game might be the perfect solution.</div>
                        <div><br /></div>
                        <div>Our product was developed using React.JS for the front-end, and Node.JS/Firebase for the back-end.<br /></div>
                        <h2>About Us</h2>
                        <div>This project was developed by Albin Shrestha, Allen Ting, Zile Zhu, and Akshin Vemana for HackTX 2020.</div>
                        <h2>Links</h2>
                        <a href="https://github.com/AkshinVemana/HackTX-2020">GitHub Repository</a>
                        <br />
                        <a href="https://wallpaperaccess.com/full/846661.png">Background</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
