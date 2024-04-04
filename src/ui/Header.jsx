import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <div>
      <div className="logo bg-black text-white flex justify-between p-4">
        <h1>Web Logo</h1>
        <nav className="list-none flex gap-5">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </nav>
      </div>
    </div>
  )
}
export default Header