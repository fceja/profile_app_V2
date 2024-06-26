import "@scss/pages/HomePage.scss";
import Hero from "@components/home/Hero"
import CardSlider from "@components/home/CardSlider"

export default function HomePage() {
    return (
        <main className="home-page-div">
            <Hero />
            <div className="content-div">
                <section className="comp-info">
                    <div className="statement">
                        Trusted experts in <span className="highlight">residential</span> and <span className="highlight">commercial</span> electrical services. <br /> <br /> Ensuring <span className="highlight">quality</span> and <span className="highlight">safety</span> for your home or business.
                    </div>
                    <div className="serv">
                        <div className="serv-title"><i>Services</i>: </div>
                        <div className="serv-list">lighting, panel, outlets, wiring / re-wiring, maintenance, repairs, inspections, new construction, commercial kitchen, HVAC, electrical room, backup power. Don&#39;t see the service you&#39;re looking for? Please ask!</div>
                    </div>
                </section>
                <section>
                    <div className="clients"><i>Clients worked for:</i></div>
                    < CardSlider />
                </section>
            </div>
        </main>
    );
}
