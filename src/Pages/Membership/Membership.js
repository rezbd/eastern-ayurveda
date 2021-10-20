import React from 'react';

const Membership = () => {
    return (

        <section id="membership">
            <div className="container text-center py-3">
                <h1 className="header-text py-4">Bikers Club <span className="orange-text">Membership</span></h1>
                <p className="lead py-3">
                    Join our exclusive bikers club today and get exclusive motorbike facilities. See creation of new
                    motorcycle models done behind closed doors, occurring years before the public gets to sit on the
                    model.
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
                                    <li>Motorbike Reviews</li>
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
                                    <li>2 Rental Credits per month</li>
                                    <li>1 free test ride per month</li>
                                    <li>Access to bikers lounge</li>
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
                                    <li>5 Rental Credits per month</li>
                                    <li>3 free test rides per month</li>
                                    <li>Access to bikers VIP lounge</li>
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