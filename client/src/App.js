import './App.css';
import { Link, Router } from '@reach/router';
import { Main } from './views/Main';
import CreateTeam from './views/CreateTeam';
import PlayersStatus from './views/PlayersStatus';

function App() {
  return (
    <div className="App">
      <Link to={"/"}>Manage Players</Link> 
      <Router>
            <Main path="/"/>
            <CreateTeam path="/player/addplayer/"/>
            <PlayersStatus path="/status/game/:id"/>
         </Router>
    </div>
  );
}

export default App;
