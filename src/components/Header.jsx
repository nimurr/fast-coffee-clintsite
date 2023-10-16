import { NavLink } from "react-router-dom";

 
export default function Header() {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <NavLink className='p-2' to='/'>Home</NavLink>
        <NavLink className='p-2' to='/addCoffee'>Add Coffee</NavLink>
        <NavLink className='p-2' to='/users'>Users</NavLink>
        <NavLink className='p-2' to='/signup'>SignUp</NavLink>
      </div>
    </div>
  )
}
