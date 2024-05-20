import React, { useState } from 'react'
import useFetch from './useFetch'

const Users = () => {
   const users = useFetch("https://jsonplaceholder.typicode.com/users");

   return (
      <ul>
         {users.map(user => (
            <li key={user.id}>{user.name}</li>
         ))}
      </ul>
   )
}

export default Users;