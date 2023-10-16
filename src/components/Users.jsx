import { useLoaderData } from "react-router-dom"
import Header from "./Header";
import { useState } from "react";

 
export default function Users() {

    const loadedUsers = useLoaderData();
    // console.log(users)
    const [users , setUser] = useState(loadedUsers)

    const handleDeleteUser = (id) =>{
        console.log(id)
        fetch(`https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/user/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data)
            // setUser(data)
            if(data.deletedCount > 0){
                alert('user delete SuccessFully')
                const remainingUser = users.filter(user => user._id != id);
                setUser(remainingUser)
            }
        })


    }

  return (
    <div>
        <Header></Header>
      <h2 className="text-center text-4xl my-4">All Users</h2>
        <div className="overflow-x-auto w-10/12 mx-auto border-2">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Job</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    users.map(d =>
                     <tr key={d._id}>
                        <td>{d.email}</td>
                        <td>{d?.createdAt}</td>
                        <button onClick={() =>handleDeleteUser(d._id)} className="bg-red-500 p-2 text-white">Delete</button>
                      </tr>
                      )
                }
               
              </tbody>
            </table>
          </div>
    </div>
  )
}
