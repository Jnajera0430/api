import Heading from "./components/Heading";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div>
      <div class="h-screen text-white text-center p10">
        <div class="container mx-auto h-full">
          <Heading />
          <Switch>
            <Route path="/" component={TaskList} exact />
            <Route path="/add" component={TaskForm} exact />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
