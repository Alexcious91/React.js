import React, { useEffect, useState } from "react";
import axios from 'axios';
import ReactLoading from 'react-loading';

function GitHub() {
   const [data, setData] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");
   const [isLoading, setIsLoading] = useState(false);

   const handleSubmit = event => {
      event.preventDefault();
      setIsLoading(true);
      getData();
   }

   useEffect(() => {
      getData();
   }, []); // Call when searchTerm changes

   const getData = async () => {
      if (searchTerm === "") return
      try {
         const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
         setData(response.data.items);
      } catch (error) {
         console.error("Error fetching data: ", error);
      } finally {
         setIsLoading(false);
      }
   }

   const listUsers = data.map(user => (
      <div key={user.id} className="media">
         <a href={user.html_url}>
            <img
               width={64}
               height={64}
               className="mr-3"
               src={user.avatar_url}
               alt="User avatar"
            />
         </a>
         <div className="media-body">
            <h5>Login: {user.login}</h5>
            <p>Id: {user.id}</p>
         </div>
      </div>
   ));

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input 
               type="text" 
               value={searchTerm}
               onChange={event => setSearchTerm(event.target.value)} 
            />
            <button type="submit">Search</button>
         </form>
         {isLoading ? (
            <ReactLoading type="spokes" color="#444" />
         ) : (
            listUsers
         )}
      </div>
   )
}

export default GitHub;
