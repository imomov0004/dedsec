import { Carousel } from "react-bootstrap";
import "./Home.css"
function Home() {
    return (
        <div>
            {/* INTRO SECTION */}
            <section className="intro-section">
                <div className="intro-heading">
                    <h1>DEDSEC</h1>
                </div>
                <div className="heading-description">
                    Security Through Community
                </div>
                <Carousel fade controls={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHViYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1523816572-a1a23d1a67b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGR1YmFpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            {/* JOINING SECTION */}
            <section className="joining-sect">
                <div className="joining">
                    <p className="join-us">Join us!</p>
                    <a href="#Discord" className="button">Discord</a>
                    <a href="#Calendar" className="button">Calendar</a>
                </div>
            </section>
        </div>
    );
}

export default Home;