import React, { useState } from "react";
import axios from "axios";
import { Image } from 'cloudinary-react'; 
import "./App.css";

function App() {
  const [imageSelected, setImageSelected] = useState("");

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "images"); 
    axios
      .post("https://api.cloudinary.com/v1_1/dkxfljh9c/image/upload", formData)
      .then((response) => {
        console.log("Image uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };

  return (
    <div className="App">
      <input
        type="file"
        onChange={(event) => {
          setImageSelected(event.target.files[0]);
        }}
      />
      <button onClick={uploadImage}>Upload Image</button>
      
      
      <Image 
        cloudName="dkxfljh9c" 
        publicId="ppyimnddieosexdxby12.png" 
        alt="Uploaded Image"
        width="300" 
        height="300"
      />
    </div>
  );
}

export default App;
