//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

// let [seconds, setSeconds] = useState(0);
// useEffect(() => {
//     let cancel = setInterval(setSeconds(seconds => seconds + 1), 1000)
//     return () => clearInterval(cancel);
// }, []);


let counter = 0;


setInterval( ()=> {
    let num1 = Math.floor(counter/1)
    let num2 = Math.floor(counter/10)
    let num3 = Math.floor(counter/100)
    let num4 = Math.floor(counter/1000)
    let num5 = Math.floor(counter/10000)

    counter++
    ReactDOM.render(<Home num1={num1} num2={num2} num3={num3} num4={num4} num5={num5} />, document.querySelector("#app"));
}, 1000)


//render your react application

