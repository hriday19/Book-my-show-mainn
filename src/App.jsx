
// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Components
import HomePage from "./Home.page.jsx/Home.page";
function App () {
return (
<>
<DefaultHOC path= "/" exact component= {HomePage} />
</>





)
}


export default App;

// Props - A  data that is being passed from one component to another
// State - A  set of data that an individual component holds