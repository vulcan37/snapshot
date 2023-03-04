// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Mountains = () => {
//   const [images, setImages] = useState([]);

//   const fetchImages = async () => {
//     const response = await axios.get(
//       'https://api.flickr.com/services/rest/',
//       {
//         params: {
//           method: 'flickr.photos.search',
//           api_key: '3256eea912dfa8d372df61db910af57a',
//           tags: 'birds',
//           format: 'json',
//           nojsoncallback: 1,
//         },
//       }
//     );
//     setImages(response.data.photos.photo);
//   };
//   useEffect(() => {
//     fetchImages();
//   }, [])
//   return (
//     <div>
//       {images.map((image) => (
//         <img
//           key={image.id}
//           src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`}
//           alt={image.title}
//         />
//       ))}
//     </div>
//   );
// };

// export default Mountains;
import React from 'react'
import FetchData from './FetchData'

function Mountains() {
  return (
    <FetchData taggy='mountains' />
  )
}

export default Mountains