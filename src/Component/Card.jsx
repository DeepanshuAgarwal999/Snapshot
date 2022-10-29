import { NavLink } from 'react-router-dom'
import '../Css/card.css'



const Card = (props) => {
  const { id,title,imgdata} = props
  return (
    <div  className="photo-card hove hove:hover container">

      {/* <p>ID: <Link to={`/users/${id}`}>{id}</Link></p> */}
      <p>title: {title}</p>
      <p><NavLink to={`/users/${id}`}>{<img src={imgdata} alt="" ></img>}</NavLink></p>
      {/* <p>{<img src={imgdata} alt="" onClick={handleDownload}></img>}</p> */}
      
    </div>
  )
}

export default Card;