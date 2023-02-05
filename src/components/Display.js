import React from 'react'

function Display(props) {
  //arry of object
  const userData=[
    {user:'Max',age:23},
    {user:'Maxwell',age:29},
    {user:'Mani',age:22},
    {user:'Manish',age:27},
  ]
    console.log(props);
  return (
    <div>Display- functional component User name from parent is:<b> {props.fname} {props.lname}</b>
   
   <table>
    <thead>
      <tr>
        <th>Username</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {
        userData.map(item=>(
          <tr>
            <td>{item.user}</td>
            <td>{item.age}</td>
          </tr>
        ))
      }
    </tbody>
   </table>
   </div>
  )
}

export default Display