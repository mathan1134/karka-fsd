import React from 'react'


export let Gol = (Pro) => {
    const data = Pro.Tabs
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>s.no</td>
                        <td>Name</td>
                        <td>age</td>
                        <td>from</td>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => 
                    item.age>18?
                    
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.from}</td>
                        </tr>:null
)}

                </tbody>
            </table>
        </div>



    )
}