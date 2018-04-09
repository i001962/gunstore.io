import React from 'react';

const Navigator = () =>
    <nav>
        <div className="container">
            <a href="/">
                <h1>gunstore<span className="colored">.io</span></h1>
            </a>

            <ul>
                <li>
                    <a href="/">Home</a>
                </li>

                {/* <li>
                    <a href="/about">About</a>
                </li> */}

                <li>

                    <a href="https://www.github.com/lmangani/gunstore.io">
                        <i className="icon ion-social-github"></i>&nbsp;
                    </a>
                </li>
            </ul>
        </div>
    </nav>

export default Navigator;
