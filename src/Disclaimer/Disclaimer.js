import React from 'react';
import { Helmet } from "react-helmet";

const Disclaimer = () => (
    <section className="container">
        <Helmet>
            <title>Joseph Hoppe - Disclaimer</title>
        </Helmet>

        <div className="row">
            <div className="row-sm">
                <div className="col-med">
                    This site uses:
                    <ul>
                        <li>Google Analytics</li>
                        <li>Cookies</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default Disclaimer