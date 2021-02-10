import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SingleOpenSourcePro from "./components/SingleOpenSourcePro";
import OpenSourceProjects from "./components/OpenSourceProjects";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact/>
        <Route component={About} path='/about'/>
        <Route component={SingleOpenSourcePro} path='/singleopenpro/:slug'/>
        <Route component={OpenSourceProjects} path='/opensourceprojects'/>
        <Route component={Project} path='/project'/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
