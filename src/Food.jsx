import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GIPHY_URL = 'https://api.gipohy.com/v1';
const Food = ({ name }) => {
    const [src, setSrc] = useState(null);

    useEffect(() => {
        const fetchGif = async () => {
            try {
                let res = await axios.get(`${GIPHY_URL}/gifs/search`, {
                    params: { q: searchTerm, api_key: "ZWZe9xyoNBJOnLBbF2lk1M79bIrb9SPd"}
                });
                setSrc(res.data.data[0].images.original.url);
            } catch (e) {
                console.log(e)
            }
        }
        fetchGif(name);
    }, [name]);

    let img = src ? <img src={src} alt={name} /> : null;
    return (
        <div>
            <h1>Here's a pic of {name}.</h1>
            {img}
        </div>
    );
};

export default Food;