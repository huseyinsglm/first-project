import React from 'react';
// import logo from './logo.svg';
import eventImg from './image/https___cdn.evbuc.com_images_89020505_182934487936_1_original.jpg'
import './EventBrite.css';
import logoImg from './image/https___cdn.evbuc.com_images_61277322_182934487936_2_original.png'

function EventBrite() {
    return (
        <div className="App">
            <header>

                {/*
                header top: aşağıdaki kodlar header bileşenlerini içeriyor
                */}
                <div className="header-top-button1">
                    <div className="header-top-button2">
                        <p className="header-logo-text">evenbrite</p>
                        <p className="header-top-text">Search for events</p>
                    </div>
                    <div className="headder-top-button-container">
                        <p className="header-top-text">Browse Events</p>
                        <p className="header-top-text">Create Event</p>
                        <p className="header-top-text">Help</p>
                        <p className="header-top-text">Sign In</p>

                    </div>
                </div>

                <div> aa</div>
                <div style={{
                    width: "1080px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    border: "1px solid rgb(219, 218, 227)"
                }}>

                    {/*
                        event imajı ve bilgileri içeriyor
                    */}
                    <div style={{display: "flex", position: "relative"}}>
                        <div>
                            <img src={eventImg} alt="logo" style={{width: "720px"}}/>
                        </div>
                        <div style={{
                            width: "360px", marginLeft: "25px", fontSize: "17px", color: "#1E0A3C",
                            backgroundColor: "rgba(255,255,255,0.9)"
                        }}>
                            <p className="header-top-text">OCT </p>
                            <p className="header-top-text"> 27</p>
                            <div style={{fontWeight: "600", fontSize: "22px", color: "#1E0A3C"}}>
                                GraphQL Summit 2020
                            </div>

                            <div style={{margin: "20px"}}>
                            </div>
                            By Apollo GraphQL
                            <button className="header-button" type="button"> Follow </button>
                            <div className="header-price">
                                $649
                            </div>


                        </div>


                    </div>

                    {/*
                        detail butonu
                    */}
                    <div style={{display: "flex", padding: "10px 0px", borderBottom: "1px solid rgb(219, 218, 227)"}}>
                        <div style={{display: "flex", width: "50%", alignItems: "center", marginLeft: "20px"}}>
                            Share
                            <div style={{display: "flex", width: "50%", alignItems: "center", margin: "15px"}}>
                                Like
                            </div>
                        </div>
                        <div style={{display: "flex", alignItems: "center", justifyContent: "flex-end", width: "50%"}}>
                            Sales Ended
                            <button className="header-details-button" type="button"> Details </button>
                        </div>
                    </div>

                    {/*
                        description body
                    */}
                    <div style={{
                        display: "flex",
                        margin: "50px",
                        addingTop: "50px",
                        position: "relative"
                    }}>
                        <div style={{width: "65%", textAlign: "justify", paddingRight: "10px", paddingLeft: "20px"}}>
                            <p>
                                <p> Description </p>


                                <h3>GraphQL Summit is coming back to San Francisco in October 2020 </h3>
                                Don't miss the GraphQL event of the year: 1,600 developers, software architects, product
                                leaders, and other innovators will come together to learn, discuss, and advance GraphQL
                                best practices.

                                We're excited to bring you:

                                advanced, and expert
                                1:1 conversations with maintainers of Apollo open-source projects
                                An inclusive, welcoming, and fun conference atmosphere with plenty of networking
                                opportunities

                                <h3>GraphQL Summit - Code of Conduct</h3>

                                We believe our community and events should be truly open for everyone. As such, we are
                                committed to providing a friendly, safe, and welcoming environment for all, regardless
                                of gender, sexual orientation, disability, ethnicity, or religion. Our event code of
                                conduct outlines our expectations for participant behavior, as well as the consequences
                                for unacceptable behavior.

                                If you have any mobility issues, are hard of hearing, visually impaired or need any
                                special accommodations please email summit@apollographql.com to let us know so we can
                                ensure a seamless experience for all attendees.


                                Stay onsite at the conference location! We've secured a small number of rooms at the
                                Hilton Union Square starting from $349 per night. Secure your room now.
                                <p><strong> Stay onsite at the conference location! We've secured a small number of
                                    rooms at the
                                    Hilton Union Square starting from $349 per night. Secure your room now.
                                </strong></p>
                            </p>
                            <p> Tag </p>
                            <div className="header-span" style={{
                                display: "flex",
                                flexWrap: "wrap"
                            }}>
                                <span style={{
                                    border: "1px solid #6F7287",
                                    borderRadius: "15px",
                                    padding: "0 5px",
                                    margin: "2px",
                                }}>
                                    United States Events</span>
                                <span style={{
                                    border: "1px solid #6F7287",
                                    borderRadius: "15px",
                                    padding: "0 5px",
                                    margin: "2px",
                                }}>
                                    California Events</span>
                                <span style={{
                                    border: "1px solid #6F7287",
                                    borderRadius: "15px",
                                    padding: "0 5px",
                                    margin: "2px",
                                }}>
                                    Things to do in San Francisco, CA</span>
                                <span style={{
                                    border: "1px solid #6F7287",
                                    borderRadius: "15px",
                                    padding: "0 5px",
                                    margin: "2px",
                                }}>
                                    San Francisco Conferences</span>
                                <span style={{
                                    border: "1px solid #6F7287",
                                    borderRadius: "15px",
                                    padding: "0 5px",
                                    margin: "2px"
                                }}>
                                    San Francisco Science & Tech Conferences</span>
                            </div>
                        </div>
                        <div style={{width: "35%", textAlign: "justify", paddingRight: "10px", paddingLeft: "20px"}}>
                            <p>
                                <p> Date And Time </p>
                                Tue, Oct 27, 2020, 7:00 AM –

                                Wed, Oct 28, 2020, 5:00 PM PDT

                                Add to Calendar

                                <p> Location</p>
                                Hilton San Francisco Union Square

                                333 O'Farrell St

                                San Francisco, CA 94102

                                United States

                                <p> Refund Policy</p>
                                <p>No Refunds</p>
                            </p>

                        </div>
                    </div>

                    <div style={{paddingLeft: "65px"}}>Share With Friends</div>
                    <div style={{
                        paddingLeft: "65px",
                        borderBottom: "1px solid rgb(219, 218, 227)",
                        paddingBottom: "30px"
                    }}>SHARE LİNK
                    </div>
                    <div style={{textAlign: "center", paddingTop: "55px"}}>
                        <img src={logoImg} alt="logo" style={{width: "80px"}}/>
                    </div>
                    <div style={{textAlign: "center", paddingTop: "12px", color: "#3659E3", fontSize: "17px"}}>
                        Apollo GraphQL
                        <p style={{color: "black", fontSize: "17px"}}>Organizer of GraphQL Summit 2020</p>
                    </div>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#3659e3",
                        textAlign: "center"
                    }}>
                        <p style={{marginRight: "20px"}}>F apollographql</p>
                        <p> T apollographql</p>
                    </div>
                    <div style={{
                        display: "flex",
                        padding: "0 15%",
                        textAlign: "justify",
                        color: "#6F7287"
                    }}>
                        <p>Apollo delivers a complete platform that helps developers build apps faster and easier by
                            getting the most out of GraphQL. Our technologies are used in production by top startups and
                            enterprises worldwide including Airbnb, Audi, GitHub, The New York Times, and CNBC. Based in
                            San Francisco with employees around the globe, we are backed by Andreessen Horowitz, Matrix
                            Partners, Trinity Ventures, and Y Combinator.</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderBottom: "1px solid rgb(219, 218, 227)",
                            paddingBottom: "40px",
                        }}>
                        <button className="header-follow-button" type="button"> Follow</button>
                        <button className="header-contact-button" type="button"> Contact</button>
                    </div>
                    <div>popup</div>

                </div>

                <div style={{
                    borderTop: "#4B4D63 solid 6px",
                    color: "#A9A8B3",
                    position: "relative",
                    background: "#1E0A3C",
                }}>
                    <div className="footer-link-container">

                        <div style={{width: "25%"}}>
                            <p>Use Eventbrite</p>
                            <a href="https://www.eventbrite.com/organizer/overview/"
                               className="footer-link">How it Works</a>
                            <p><a href="https://www.eventbrite.com/organizer/pricing/"
                                  className="footer-link">Pricing</a></p>

                            <p><a href="https://www.eventbrite.com/blog/"
                                  className="footer-link">Event Blog</a></p>

                        </div>
                        <div style={{width: "25%"}}>
                            <p>Plan Events</p>
                            <p><a href="https://www.eventbrite.com/l/registration-online/"
                                  className="footer-link">Online Registration</a></p>
                            <p><a href="https://www.eventbrite.com/l/sell-tickets/"
                                  className="footer-link">Sell Event Tickets</a></p>
                            <p><a href="https://www.eventbrite.com/l/event-management-software/"
                                  className="footer-link">Event Management Software</a></p>

                        </div>
                        <div style={{width: "25%"}}>
                            <p>Find Events</p>
                            <p><a href="/d/ca--san-francisco/events/"
                                  className="footer-link">Browse San Francisco Events</a></p>
                            <p><a href="/eventbriteapp/"
                                  className="footer-link">Get the Eventbrite App</a></p>


                        </div>
                        <div style={{width: "25%"}}>
                            <p>Connect With Us</p>
                            <p><a title="Report This Event" id="report_this_link"
                                  className="footer-link" href=""
                            >Report This Event</a></p>
                            <p><a href="https://www.eventbrite.com/help/"
                                  className="footer-link">Help Center</a></p>
                            <p><a href="https://www.eventbrite.com/tos/" className="footer-link">Terms</a></p>
                            <p><a href="https://www.eventbrite.com/privacypolicy/" className="footer-link">Privacy</a>
                            </p>
                            <p><a
                                href="https://www.eventbrite.com/support/articles/en_US/Troubleshooting/supplemental-privacy-notice-for-california-residents?lg=en_US"
                                className="footer-link">CA Privacy Notice</a></p>
                            <p><a href="https://www.eventbrite.com/brite-community/"
                                  className="footer-link">Community Guidelines</a></p>

                        </div>


                    </div>
                    <div style={{
                        textAlign: "center",
                        fontSize: "48px",
                        fontWeight: "500"
                    }}>e
                    </div>
                    <div style={{
                        textAlign: "center",
                        fontSize: ".9333333333rem",
                        fontHight: " 1.25rem",
                        color: "#A9A8B3",
                        paddingBottom: "20px"
                    }}>© 2020 Eventbrite
                    </div>

                </div>


            </header>
        </div>
    );
}

export default EventBrite;
