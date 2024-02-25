import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(post);

  return (
    <div className="App">
      <h1>axios</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th>s.no</th>
              <th>ID</th>
              <th>User ID</th>
              <th>Title</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {post
              .filter((data) => data.completed)
              .map((data, index) => (
                <tr key={data.id}>
                  <td>{index + 1}</td>
                  <td>{data.id}</td>
                  <td>{data.userId}</td>
                  <td>{data.title}</td>
                  <td>{data.completed.toString()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
