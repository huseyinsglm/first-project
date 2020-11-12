import React from 'react';
// import logo from './logo.svg';
import eventImg from './image/https___cdn.evbuc.com_images_89020505_182934487936_1_original.jpg'
import './Header.css';
import './Footer.css';
import './Customization.css';
import './Body.css';
import logoImg from './image/https___cdn.evbuc.com_images_61277322_182934487936_2_original.png'

function EventBrite() {
    return (
        <div className="App">
            <header>

                {/*
                header top: aşağıdaki kodlar header bileşenlerini içeriyor
                */}
                <div className="header-top-wrapper">
                    <div className="header-top-search-container">
                        <p className="header-logo-text header-logo-text-color">evenbrite</p>
                        <p className="header-top-text">Search for events</p>
                    </div>
                    <div className="header-top-button-container">
                        <p className="header-top-text">Browse Events</p>
                        <p className="header-top-text">Create Event</p>
                        <p className="header-top-text">Help</p>
                        <p className="header-top-text">Sign In</p>

                    </div>
                </div>

                <div> aa</div>

                <div className="body">

                    {/*
                        event imajı ve bilgileri içeriyor
                    */}
                    <div className="body-image">
                        <div>
                            <img src={eventImg} alt="logo" className="body-image-width"/>
                        </div>
                        <div className="body-timer-container">
                            <p className="body-timer-text">OCT </p>
                            <p className="body-timer-text"> 27</p>
                            <div className="body-timer-container-header">
                                GraphQL Summit 2020
                            </div>

                            <div style={{margin: "20px"}}>
                            </div>
                            By Apollo GraphQL
                            <button className="body-timer-container-button-follow" type="button"> Follow </button>
                            <div className="body-price">
                                $649
                            </div>


                        </div>


                    </div>

                    {/*
                        detail butonu
                    */}
                    <div className="body-sharing-button-container">
                        <div className="body-sharing-buttons">
                            Share
                            <div className="body-sharing-buttons">
                                Like
                            </div>
                        </div>
                        <div className="body-sales-button">
                            Sales Ended
                            <button className="body-details-button" type="button"> Details </button>
                        </div>
                    </div>

                    {/*
                        description body
                    */}
                    <div className="body-description-container">
                        <div className="body-description-text">
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
                            <div className="body-span-container">
                                <span className="body-span-tags">
                                    United States Events</span>
                                <span className="body-span-tags">
                                    California Events</span>
                                <span className="body-span-tags">
                                    Things to do in San Francisco, CA</span>
                                <span className="body-span-tags">
                                    San Francisco Conferences</span>
                                <span className="body-span-tags">
                                    San Francisco Science & Tech Conferences</span>
                            </div>
                        </div>
                        <div className="body-date-time">
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
                    <div className="footer-link-share ">SHARE LİNK
                    </div>
                    <div className="body-company-logo-container">
                        <img src={logoImg} alt="logo" className="body-company-logo"/>
                    </div>
                    <div className="body-company-name ">
                        Apollo GraphQL
                        <p className="body-company-header">Organizer of GraphQL Summit 2020</p>
                    </div>
                    <div className="body-company-social-container">
                        <p style={{marginRight: "20px"}}>F apollographql</p>
                        <p> T apollographql</p>
                    </div>
                    <div className="body-company-header-description">
                        <p>Apollo delivers a complete platform that helps developers build apps faster and easier by
                            getting the most out of GraphQL. Our technologies are used in production by top startups and
                            enterprises worldwide including Airbnb, Audi, GitHub, The New York Times, and CNBC. Based in
                            San Francisco with employees around the globe, we are backed by Andreessen Horowitz, Matrix
                            Partners, Trinity Ventures, and Y Combinator.</p>
                    </div>
                    <div className="body-company-follow-container">
                        <button className="body-company-follow-button" type="button"> Follow</button>
                        <button className="body-company-contact-button" type="button"> Contact</button>
                    </div>
                    <div>popup</div>

                </div>

                <div className="footer-wrapper footer-background-color">
                    <div className="footer-link-container">
                        <div className="footer-link-column">
                            <p>Use Eventbrite</p>
                            <a href="https://www.eventbrite.com/organizer/overview/"
                               className="footer-link">How it Works</a>
                            <p><a href="https://www.eventbrite.com/organizer/pricing/"
                                  className="footer-link">Pricing</a></p>

                            <p><a href="https://www.eventbrite.com/blog/"
                                  className="footer-link">Event Blog</a></p>

                        </div>
                        <div className="footer-link-column">
                            <p>Plan Events</p>
                            <p><a href="https://www.eventbrite.com/l/registration-online/"
                                  className="footer-link">Online Registration</a></p>
                            <p><a href="https://www.eventbrite.com/l/sell-tickets/"
                                  className="footer-link">Sell Event Tickets</a></p>
                            <p><a href="https://www.eventbrite.com/l/event-management-software/"
                                  className="footer-link">Event Management Software</a></p>

                        </div>
                        <div className="footer-link-column">
                            <p>Find Events</p>
                            <p><a href="/d/ca--san-francisco/events/"
                                  className="footer-link">Browse San Francisco Events</a></p>
                            <p><a href="/eventbriteapp/"
                                  className="footer-link">Get the Eventbrite App</a></p>


                        </div>
                        <div className="footer-link-column">
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
                    <div className="footer-logo">
                        e
                    </div>
                    <div className="footer-copy-write">
                        © 2020 Eventbrite
                    </div>
                </div>

            </header>
        </div>
    );
}

export default EventBrite;
