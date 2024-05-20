import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';
import useFetch from './useFetch';
import Users from './Users';

const App = () => {
  const postUrl = "https://jsonplaceholder.typicode.com/posts";
  const todosUrl = "https://jsonplaceholder.typicode.com/todos";
  // states
  const [requested, setRequested] = useState(postUrl)
  // const [data, setData] = useState([]);


  const data = useFetch(requested)

  return (
    <div>
      <Users />
      <Button variant='link' onClick={() => setRequested(postUrl)}>Posts</Button>

      <Button variant='link' onClick={() => setRequested(todosUrl)}>Todos</Button>
      <br />

      Requested: {requested}
      <ul>
        {data.map(element => (
          <li key={element.id}>{element.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;