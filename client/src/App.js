import { Switch, Route } from "react-router-dom";
import Landing from "./views/Landing";
import Home from "./views/Home";
import Create from "./views/Create";
import Detail from "./views/Detail";
import NotFound from "./views/NotFound";
import Navbar from "./components/Navbar";



const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/create" component={Create} exact />
          <Route path="/poke/:id" component={Detail} exact />
          <Route component={NotFound}  />
        </Switch>
      </main>
    </div>
  );
}

export default App;
