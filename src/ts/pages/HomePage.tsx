import "@scss/pages/HomePage.scss";

export default function HomePage() {
    return (
        <div className="home-page-div">
            <div className="hero-div">
                <div className="left-right-div">
                    <div className="left-div">
                        <div className="heading-div">Get the <br />job done.<br /> Right.</div>
                    </div>
                    <div className="right-div">
                        <div className="trapezoid-img-div">
                            <img
                                className="img-main"
                                src="src/assets/temp_4x3.png"
                                alt="test"
                            />
                        </div>
                    </div>
                </div>
                <div className="trapezoid-div"></div>
            </div>
        </div>
    );
}
