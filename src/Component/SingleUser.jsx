import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import '../Css/card.css'
import { useNavigate } from 'react-router-dom'
import '../Css/buton.css'

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



// const handleDownload=()=>{
//   alert("Are You Sure To Download ? ");
// }
const navigate=useNavigate();
const Downnload =()=>{
  navigate('/users/:userID/Download')
}
  
const ReverseBack =()=>{
  navigate('/users')
}


  return (
    <div>
    <div className="photo-cards">
      <p>ID:{user.id} </p>
      <p>Title:{user.title} </p>
      <img src={user.imgdata} alt='' onClick={Downnload}></img> 
      <br></br>   
      <br></br>   
      <button type="button" className="btn btn-outline-success" onClick={ReverseBack}>GO back </button>
      <button type="button" className="btn btn-outline-success butond " onClick={Downnload} >Download </button>
    </div>
    </div>
  )
}

export default SingleUser;