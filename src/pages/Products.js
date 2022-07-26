import image from "./jaleel.jpg";

const Products = () => {
  return (
    <div>
      <h1 class="text-center py-4 text-green-700">The Products page</h1>
      <section class="text-center py-1">
        <ul class="flex space-x-3 px-2">
          <div class="w-64 h-40 bg-slate-200 flex items-center">
                <img
                src={image}
                alt="pic"
                class="px-2 py-3 w-28 h-28 rounded-full "
                ></img>
                <div class="space-y-1">
                <h1 class="font-bold px-3 ">Jaleel Sayal</h1>
                <p>Software Develper</p>
                <button class="rounded-full bg-green-700 px-5 py-1 flex ">
                    {" "}
                    More Details
                </button>
                </div>
          </div>
          <li>Product 2</li>
        </ul>
      </section>
    </div>
  );
};
export default Products;
