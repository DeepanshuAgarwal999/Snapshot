import { useState, useEffect } from 'react'
import axios from 'axios'
import '../Css/Photo-list.css'
import Card from './Card'
const Users = () => {
  //user state
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])
  const [userLoading, setUserLoading] = useState(false)

  //search payload state
  const [searchKeyword, setSearchKeyword] = useState('')

  //handle input search
  const handleSearchKeyword = (event) => {
    setSearchKeyword(event.target.value)
    const tempUsers = users.filter(user => user.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredUsers(tempUsers)
  }

  //handle search filter
  const handleFilter = (e) => {
    e.preventDefault()
    const tempUsers = users.filter(user => user.title.toLowerCase().includes(searchKeyword.toLowerCase()))
    setFilteredUsers(tempUsers)
  }
  

  //call API to get user and update the state
  useEffect(() => {
    setUserLoading(true)
    axios.get('http://localhost:3001/users').then(res => {
        // console.log(res.data)
      setUsers(res.data)
      setFilteredUsers(res.data)
      setUserLoading(false)
    }).catch(error => {
      console.log("error in api call", error);
     alert("NO Data Found :( \nAPI ERROR");
     setUserLoading(false)
    })

  }, [])
  return (
    <div>
      {          /** Filter input field and filter logic */}




       <form onSubmit={handleFilter}>
        <input  className="m-5 form-group col-md-4 " type="text" placeholder="Search your favourite image" onChange={handleSearchKeyword} style={{height:50}}/>
        <input className="btn btn-primary " type="submit" value="Search"  style={{width:100,height:52}}/>
      </form> 

      {/** Render the photo cards */}
      {
        userLoading && <h3> Loading...</h3>
      }
      {
        !userLoading && filteredUsers && <div className="photo-list">
          {
            filteredUsers.map(user => (
            <Card key={user.id} {...user} />
            ))
          }


        </div>
      }
    </div>
  )
}

export default Users