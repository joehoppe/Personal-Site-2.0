import React from 'react';

const AboutMe = () => (
    <section className="container">
        <div className="row">
            <div className="row-sm">
                <div className="col-med">
                    <h3>
                        StackOverflow Profile:
                    </h3>
                    <a href="http://stackoverflow.com/users/846844/hoppe" target="_blank" title="Stack Overflow profile" rel="noopener noreferrer">
                        <img src="http://stackoverflow.com/users/flair/846844.png" width="208" height="58" alt="profile for Hoppe at Stack Overflow, Q&amp;A for
                            professional and enthusiast programmers" title="profile for Hoppe at Stack Overflow, Q&amp;A for professional and enthusiast programmers" />
                    </a>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="row-sm">
                <div className="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US"
                                data-type="horizontal" data-theme="light" data-vanity="josephhoppe">
                                <a className="LI-simple-link" title="My LinkedIn Profile" style={{ float: "right" }}
                                    href='https://www.linkedin.com/in/josephhoppe?trk=profile-badge'>Joseph Hoppe</a></div>
            </div>
        </div>
    </section>
)

export default AboutMe