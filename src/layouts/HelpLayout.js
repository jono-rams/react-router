import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel enim in arcu feugiat dapibus.</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}