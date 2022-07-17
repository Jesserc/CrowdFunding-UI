import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CreateCampaign from './components/CreateCampaign';
import ExploreCampaign from './components/ExploreCampaign';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper mt-5">
        <div className="container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/create-campaign">
            <CreateCampaign />
          </Route>

          <Route path="/explore-campaign">
            <ExploreCampaign />
          </Route>
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
