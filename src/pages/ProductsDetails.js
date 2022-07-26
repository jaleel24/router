import image from './jaleel.jpg'
const ProductDetails = ()=> {
    return(
        <div class="flex items-center">
             <img
              src={image}
              alt="pic"
              class="px-2 py-3 w-28 h-28  "
            ></img>
           <div>
           <h1 class="text-gray-500 font-mono"> hi This is Jaleel, A Computer Science Gradauate from York University Toronto.</h1>
           </div>
        </div>
    );
}
export default ProductDetails;