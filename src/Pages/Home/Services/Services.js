import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('medData.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id="services" className="mt-5">
            <h2>Our Medicines</h2>
            <div className="service-container container pb-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;