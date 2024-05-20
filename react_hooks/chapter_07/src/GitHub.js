import React, { useEffect, useState } from "react";
import axios from 'axios'
import ReactLoading from 'react-loading';
import { Media } from 'react-bootstrap';

function GitHub() {
   const [data, setData] = useState([]);
   const [searchTerm, setSearchTerm] = useState("greg");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = event => {
      event.preventDefault();
      setIsLoading(true)
      getData();
   }

   useEffect(() => {
      getData();
   }, []) // call when search item changes

   const getData = async () => {
      const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`)
      setData(response.data.items)
      setIsLoading(false)
   }

   const listUsers = data.map(user =>
      <Media key={user.id}>
         <a href={user.html_url}>
            <img
               width={64}
               height={64}
               className="mr-3"
               src={user.avatar_url}
               alt="generic placeholder"
            />
         </a>

         <Media.Body>
            <h5>Login: {user.login}</h5>
            <p>Id: {user.id}</p>
         </Media.Body>
      </Media>
   )

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" onChange={event => setSearchTerm(event.target.value)} />
            <button type="submit">Search</button>
         </form>
         {isLoading &&
            <ReactLoading type="spokes" color="#444" />
         }
         {listUsers}
      </div>
   )
}

export default GitHub