import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Css/card.css'
const SingleUser = () => {

  const [user, setUser] = useState({});
    const params = useParams()

  // call API to get user and update the state
  useEffect(() => {
    // console.log("params", params)
    axios.get(`http://localhost:3001/users/${params.userID}`).then(res => {
      setUser(res.data)
    }).catch(error => {
      console.log("error in api call", error)

    })

  }, [params])



const handleDownload=()=>{
  alert("Are You Sure To Download ? ");
}

  



  return (
    <div>
    <div className="photo-card">
      <p>ID:{user.id} </p>
      <p>Title:{user.title} </p>
      <img src={user.imgdata} alt='' onClick={handleDownload}></img> 
      <br></br>   
      <br></br>   
      {/* <button type="button" className="btn btn-outline-success " onClick={reverseBack}>GO back </button> */}
      <button type="button" className="btn btn-outline-success " onClick={handleDownload}>Download </button>
    </div>
    </div>
  )
}

export default SingleUser;