import React from 'react';
import { Accordion } from 'react-bootstrap';
// import './Faq.css';

const Faq = () => {
    return (
        <div className="w-50 mx-auto">
            <h2 className="my-5">Frequently Asked Questions</h2>
            <Accordion className="mb-5">
                <Accordion.Item eventKey="0" className="faq-body">
                    <Accordion.Header>What is yoga?</Accordion.Header>
                    <Accordion.Body>
                        Yoga is an ancient practice that involves physical poses, concentration, and deep breathing. A regular yoga practice can promoteTrusted Source endurance
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is Ayurveda?</Accordion.Header>
                    <Accordion.Body>
                        Ayurveda is an alternative medicine system with historical roots in the Indian subcontinent. The theory and practice of Ayurveda is pseudoscientific. The Indian Medical Association describes Ayurvedic practitioners who claim to practice medicine as quacks.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Is Ayurveda Effective?</Accordion.Header>
                    <Accordion.Body>
                        It is common to hear a general statement that Ayurveda lacks scientific evidence. By scientific evidence, it is commonly referred to results of human clinical trials undertaken adoring those applied to pharmaceuticals, involving randomized controlled trials (RCT), either a placebo or active controlled.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What are the benefits of Ayurbeda?</Accordion.Header>
                    <Accordion.Body>
                        Ayurveda blends our modern lifestyle and health-oriented habits with the ancient wisdom of using natural substances, medicines and herbs to help us lead a healthy, happy, stress-free and disease-free life. ... The cardinal aim of Ayurveda is to restore the individual balance between mind, body and spirit.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Is Yoga and Ayurveda same?</Accordion.Header>
                    <Accordion.Body>
                        Yoga and Ayurveda two distinct sciences yet share the same Vedic roots. ... While yoga deals with the harmonizing of mind, body and soul while Ayurveda takes care of the person's both physical and mental wellbeing through the means of diet and lifestyle changes.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>What are the side effects of Ayurveda?</Accordion.Header>
                    <Accordion.Body>
                        Among some of the side effects you should watch out for: Triphala: diarrhea and abdominal discomfort, especially in high doses. Guggul: stomach upset, headaches, nausea, vomiting, loose stools, diarrhea, belching, and hiccups. Boswellia: stomach pain, nausea, diarrhea, and an allergic rash (when applied to the skin)
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Is Ayurveda a lifestyle?</Accordion.Header>
                    <Accordion.Body>
                        Ayurveda is an ancient science of life since time immemorial. Ayurveda, apart from providing various therapeutic measures for diseases, emphasizes on maintenance, promotion of health and prevention of diseases through diet and lifestyle regimens.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Is it safe to take the ayurvedic medicines?</Accordion.Header>
                    <Accordion.Body>
                        Ayurveda is one of the most ancient systems of treatment in India. These medicines are effective and time tested. They help one regain energy and enhance well-being. Maharishi Ayurvedic medicine, for one, is safe and backed up with scientific evidence.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="8">
                    <Accordion.Header>How can I learn more about Ayurveda?</Accordion.Header>
                    <Accordion.Body>
                        Ideally, getting to know yourself should be the first step for learning Ayurveda. Observing your emotions and paying attention to small details about your body and mind.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Faq;