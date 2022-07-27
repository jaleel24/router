import image from './jaleel.jpg';
import { useParams } from 'react-router-dom';
const ProductDetails = ()=> {
    const params =useParams();
    // params object will have key value pairs
    console.log(params.priductId);
    return(
        <div class="flex items-center">
             <img
              src={image}
              alt="pic"
              class="px-2 py-3 w-28 h-28 rounded-full "
            ></img>
           <div>
           <h1 class="text-gray-500 font-mono"> hi This is Jaleel, A Computer Science Gradauate from York University Toronto.</h1>
           </div>
           <p>{params.priductId}</p>
        </div>
    );
}
export default ProductDetails;