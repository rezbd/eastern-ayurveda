import React from 'react';
import Herb from '../Herb/Herb';

const herbs = [
    {
        img: 'https://i.ibb.co/S5N39q5/ashwagandha.jpg',
        name: 'Ashwagandha',
        benefit: 'Calms the brain, reduce swelling, lower blood pressure, and alter the immune system'
    },
    {
        img: 'https://i.ibb.co/QQTHZzr/boswellia.jpg',
        name: 'Boswellia',
        benefit: 'Effective painkiller and may prevent the loss of cartilage'
    },
    {
        img: 'https://i.ibb.co/TWMzX7g/licorice-root.jpg',
        name: 'Licorice root',
        benefit: 'Licorice root may have potent antioxidant, anti-inflammatory, and antimicrobial effects'
    },
    {
        img: 'https://i.ibb.co/SrcYM0P/triphala.jpg',
        name: 'Triphala',
        benefit: 'Triphala contains powerful anti-inflammatory compounds that may help protect against certain cancers.'
    }
]

const Herbs = () => {
    return (
        <div id="herbs" className="container mt-5">
            <h2>Special Ayurvedic Herbs</h2>
            <div className="row">
                {
                    herbs.map(herb => <Herb key={herb.name} herb={herb}></Herb>)
                }
            </div>
        </div>
    );
};

export default Herbs;