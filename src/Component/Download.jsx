import { saveAs } from 'file-saver'
import React from 'react';







function Download(){
    const downloadImage = () => {
      saveAs('https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720__340.jpg', 'image.jpg') // Put your image url here.
      alert("Downloading");
    }
    return(
        <div>
            <div className="container mt-5 mb-5 p-5" >
            <button type="button" className="btn btn-outline-success" onClick={downloadImage} style={{width:300,height:100,fontSize:40}}>Download </button>
           <h1 style={{margin:67,padding:50}}>
            Thanks!! For Visiting
           </h1>
            </div>
        </div>
    )
}
export default Download;




  