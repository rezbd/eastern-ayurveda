import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Details = () => {
    const { serviceId } = useParams();
    const [post, setPost] = useState([]);
    const [med, setMed] = useState([]);

    useEffect(() => {
        fetch("/medData.json")
            .then((res) => res.json())
            .then(data => setPost(data))
    }, []);
    useEffect(() => {
        const foundPost = post.find(item => item.id === serviceId)
        setMed(foundPost);
    }, [post]);

    return (
        <div className="w-50 mx-auto">
            <h3 className="mt-4">Medicine: {med?.title}</h3>
            <img src={med?.img} alt="" />
            <p className="mt-4"><strong>Description</strong>: {med?.description}</p>
            <p className="mt-4 pb-4"><strong>Indications</strong>: {med?.indications}</p>
        </div>
    );
};

export default Details;