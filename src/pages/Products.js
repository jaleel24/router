import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import image from "./jaleel.jpg";

const Products = () => {
  return (
    <Fragment>
      <div>
        <h1 class="text-center py-4 text-green-700">The Products page</h1>
      </div>
      <section class="text-center py-1 flex">
        <ul class="flex flex-wrap space-x-1 px-1 ">
          <div class="w-64 h-40 bg-slate-100 flex items-center rounded-lg">
            <img
              src={image}
              alt="pic"
              class="px-2 py-3 w-28 h-28 rounded-full "
            ></img>
            <div class="space-y-0.5">
              <h1 class="font-bold px-3 ">Jaleel Sayal</h1>
              <p class="text-gray-400 font-bold">Software Develper</p> 

                <NavLink to="/productDetails"> 
                <button class="rounded-full bg-green-700 px-5 py-1 flex hover:bg-green-500 visited:bg-white">
                    {" "}
                    More Details
                </button>
              </NavLink>
            </div>
          </div>
        
        </ul>
      </section>
    </Fragment>
  );
};
export default Products;
