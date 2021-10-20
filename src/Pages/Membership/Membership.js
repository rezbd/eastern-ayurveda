import React from 'react';

const Membership = () => {
    return (

        <section id="membership">
            <div className="container text-center py-3">
                <h1 className="header-text py-4">Yoga Club Membership</h1>
                <p className="lead py-3">
                    JAyurveda is a 5,000-year-old system of natural healing that’s truly stood the test of time. Join our yoga club to get all the benefits of yoga and ayurbeda.
                </p>
            </div>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-lg-3">
                    <div className="col mb-4">
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <h4>Free</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="my-0 font-weight-normal">$0 <small className="text-muted">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Monthly newsletters</li>
                                    <li>Yoga Reviews</li>
                                    <li>Membership badge</li>
                                    <li>Email support</li>
                                </ul>
                                <button className="btn btn-outline-primary btn-lg w-100">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <h4>Silver</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="my-0 font-weight-normal">$29 <small className="text-muted">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Benefits of Basic</li>
                                    <li>Weekly yoga lessons</li>
                                    <li>Access to yoga lounge</li>
                                    <li>24/7 call support</li>
                                </ul>
                                <button className="btn btn-primary btn-lg w-100">Join Us</button>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card shadow">
                            <div className="card-header py-3">
                                <h4>Gold</h4>
                            </div>
                            <div className="card-body">
                                <h1 className="my-0 font-weight-normal">$99 <small className="text-muted">/mo</small></h1>
                                <ul className="list-unstyled mt-3 mb-4">
                                    <li>Benefits of silver</li>
                                    <li>Daily yoga class</li>
                                    <li>Access to yoga gym</li>
                                    <li>24/7 dedicated Support</li>
                                </ul>
                                <button className="btn btn-primary btn-lg w-100">Join Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Membership;