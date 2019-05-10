import React from 'react';
import { Link } from "react-router-dom";

const NotFound = () => (
    <section className="container">
        <div className="row">
            <div className="row-sm">
                <div className="col-med">
                    I can&rsquo;t find the page you are looking for. Would you like to go to the <Link to="/" title="Home">home page</Link> instead?
                </div>
            </div>
        </div>
    </section>
)

export default NotFound