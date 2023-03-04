import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = (props) => {
  const [images, setImages] = useState([]);


  useEffect(() => {
    const tag = props.taggy;
    const fetchImages = async () => {
      const response = await axios.get(
        'https://api.flickr.com/services/rest/',
        {
          params: {
            method: 'flickr.photos.search',
            api_key: '3256eea912dfa8d372df61db910af57a',
            tags: tag,
            format: 'json',
            nojsoncallback: 1,
          },
        }
      );
      setImages(response.data.photos.photo);
    };
    fetchImages();
  }, [props.taggy])
  return (
    <div>
      <h3>{props.taggy} pictures</h3>
      {images.map((image) => (
        <img
          key={image.id}
          src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
          alt={image.title}
        />
      ))}
    </div>
  );
};

export default FetchData;