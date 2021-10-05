import { Route } from "react-router-dom";

// HOC
import DefaultHOC from "./HOC/Default.HOC";

// Components
import Temp from "./components/temp";
function Name() {
  return  <h1>Hello</h1>
}
function Name2() {
  return  <h1>Hello Movie</h1>
}
function App() {
return (
  <>
    <Route path="/" component={Name} />
    <Route path="/movie" component={Name2} />
  </>

)
}
export default App;

// Props - A  data that is being passed from one component to another
// State - A  set of data that an individual component holds