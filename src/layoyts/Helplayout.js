import { Outlet,NavLink } from "react-router-dom";


export default function Helplayout() {
  return (
    <div className="help-layout">
       <h2>Welcome to help website</h2>
       <p>this is help website page  </p>

       <nav>
           <NavLink to="faq">View the FAQ</NavLink>
           <NavLink to="contact">Contact us </NavLink>
       </nav>

       <Outlet />
    </div>
  )
}
