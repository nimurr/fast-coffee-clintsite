import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import Header from "./Header";

 
export default function Singup() {
    const {createUser} = useContext(AuthContext)


    const handleSignUp = (e)=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(res => {
            // console.log(res.user)
            const createdAt = res.user?.metadata?.creationTime;
            const user = {email , createdAt : createdAt};
            fetch('https://coffee-store-server-1zx0m2sdd-neorbislams-projects.vercel.app/user',{
              method:"POST",
              headers:{
                'content-type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => console.log(data))

        })
        .catch( error => {
            console.log(error)
        })


    }
  return (
    <div>
      <Header></Header>
       <form onSubmit={handleSignUp} className="w-4/12 mx-auto">
            <input className="p-2 block border-2 my-4 w-full" type="email" name="email" placeholder="email" id="" />
            <input className="p-2 block border-2 my-4 w-full" type="password" name="password" placeholder="password" id="" />
            <input className="p-2 w-full bg-blue-600 text-white" type="submit" value="SingUp" />
       </form>
    </div>
  )
}
