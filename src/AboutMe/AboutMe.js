import React from 'react';
import { Helmet } from "react-helmet";

const AboutMe = () => (
    <section className="container">
        <Helmet>
            <title>Joseph Hoppe - About Me</title>
        </Helmet>

        <div className="row">
            <div className="row-sm">
                Find me on <a href="http://www.linkedin.com/in/josephhoppe"target="_blank" rel="noopener noreferrer">LinkedIn</a>.
            </div>
        </div>

        <div className="row">
            <div className="row-sm">
                <div className="col-med">
                    <div>
                        StackOverflow Profile:
                    </div>
                    <a href="http://stackoverflow.com/users/846844/hoppe" target="_blank" title="Stack Overflow profile" rel="noopener noreferrer">
                        <img src="http://stackoverflow.com/users/flair/846844.png" width="208" height="58" alt="profile for Hoppe at Stack Overflow, Q&amp;A for
                            professional and enthusiast programmers" title="profile for Hoppe at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
                    </a>
                </div>
            </div>
        </div>
    </section>
)

export default AboutMe