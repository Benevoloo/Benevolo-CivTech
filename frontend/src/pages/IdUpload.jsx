import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dssadlhcv' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};

// export default App
// import './App.css';
// import axios from 'axios';
// import React, { useState } from 'react';


function Apps() {
  const [image, setImage] = useState(null);
  const handleClick = () => {
    axios.post('http://localhost:4000/image-upload', image)
    .then(res => {
      console.log('Axios response: ', res)
    })
  }
  const handleFileInput = (e) => {
    console.log('handleFileInput working!')
    console.log(e.target.files[0]);
    const formData = new FormData(); 
    formData.append('my-image-file', e.target.files[0], e.target.files[0].name);
    setImage(formData);
  }
  return (
    <div className="App">
      <h1>Image Upload</h1>
      <button onClick={handleClick}>Upload!</button>
      <input type="file" onChange={handleFileInput}/>
    </div>
  );
}
export default Apps;