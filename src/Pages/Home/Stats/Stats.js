import React from 'react';
import './Stats.css';

const Stats = () => {
    return (

        <div id="stats" className="container mb-5 mt-5">
            <div className="container text-center">
                <h1 className="py-3">Trusted by Customers
                </h1>
                <p className="py-3">
                    One of the core principles of Ayurveda medicine, and what makes it stand apart from western medicine, is that it takes into account bio-individuality and a patient’s entire body-mind-spirit connection. That is why our customers are highly satisfied with our medicines.
                </p>
            </div>
            <div className="container text-center">
                <div className="row g-3">
                    <div className="col-12 col-lg-4">
                        <div className="p-3 border bg-stats shadow">
                            <h1 className="stats-header">99.9%</h1>
                            <p className="stats-p">Customer Satisfaction</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="p-3 border bg-stats shadow">
                            <h1 className="stats-header">24/7</h1>
                            <p className="stats-p">Support</p>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="p-3 border bg-stats shadow">
                            <h1 className="stats-header">113K</h1>
                            <p className="stats-p">Deliveries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Stats;