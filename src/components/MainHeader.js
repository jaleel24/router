import { NavLink } from "react-router-dom";

//! instead of using the a tags and href we simply import Link from the react-router-dom and
//! use it as shown  below then then if we click on the link our browser wont reload and automatically does what is required
// we dont lose any state
const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul class=" bg-green-900  flex justify-center space-x-3 font-bold py-4 ">
          <li >
            <NavLink to="/welcome" class="hover:text-white">Welcome</NavLink>
          </li>

          <li >
          <NavLink to="/products" class=" visited:text-white">Products</NavLink>
          </li>
         <li  >
         <NavLink to="/welcome" class="active:text-amber-300">link</NavLink>
         </li>

        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
