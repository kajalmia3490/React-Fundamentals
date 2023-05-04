import Tech from "./tech"
import Ecommerce from "./ecomm"
import Social from "./social"

//import a message:
// import Props from "../props/props"

function Main() {
    return (
        <div className="container rounded m-5 mt-10 border border-gray-400">
            <Tech/>
            <Ecommerce/>
            <Social/>
            {/* reuseable this component */}
            {/* <Props name='Mayan' /> */}
        </div>
        
    )
}

export default Main