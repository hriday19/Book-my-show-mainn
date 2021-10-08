
// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Default.HOC";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Pages
import Movie  from "./Page/Movie.page";
import HomePage from "./Page/Home.page";
import PlaysPage from "./Page/Plays.page";
import Plays from "./Page/Plays.page";

// Components
function App () {
return (
<>
<DefaultHOC path= "/" exact component= {HomePage} />
<MovieHOC path= "/movie/:id"exact component={Movie} />
<DefaultHOC path="/plays" exact component={Plays} />
</>
);
};


export default App;

// Props - A  data that is being passed from one component to another
// State - A  set of data that an individual component holds