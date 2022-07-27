import { Route } from "react-router-dom";
const Welcome = ()=>{
    return<section>
         <h1 class="text-center py-4 text-green-700">The Welcome page</h1>
            <Route path="/welcome/new-user"></Route>
        </section>

}
export default Welcome;