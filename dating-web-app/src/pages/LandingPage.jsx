import React from 'react'

const LandingPage = () => {
    return (
        <div>
            <section className="landing-page-screen">
                <div className="main-screen">
                    <div>
                        <h1>Find your other </h1>
                        <h1>half here.</h1>
                        <p className="small-tagline">we make dating fun and easy for you.
                        </p>
                        <p className="small-tagline">Here is your chance</p>
                    </div>
                    <div className="create-button">
                        <button className="btn">Create account</button>
                    </div>
                </div>
                <div className="bg-image">
                    <img src="./dating.png" alt="bg-image" />
                </div>
                <div id="hearts-alpaca" className="hearts">
                    <div className="heart"></div>
                    <div className="heart"></div>
                    <div className="heart"></div>
                    <div className="heart"></div>
                </div>
            </section>

        </div>
    )
}

export default LandingPage