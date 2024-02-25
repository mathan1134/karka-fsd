import React, { useState } from 'react';

export const Main = () => {
    const [userData, setUserData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Call fetchData directly in the component body
    fetchData();

    return (
        <>
            <div>
                <table >
                    <thead>
                        <tr>
                            <th >s.no</th>
                            <th>ID</th>
                            <th>User ID</th>
                            <th>Title</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.filter((datas) => datas.completed).map((datas,index) => (
                            <tr key={datas.id}>
                                <td>{index+1}</td>
                                <td>{datas.id}</td>
                                <td>{datas.userId}</td>
                                <td>{datas.title}</td>
                                <td>{datas.completed.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};
