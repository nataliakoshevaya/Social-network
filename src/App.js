import './App.css';

import Headers from './components/header/Headers';
import Profile from './components/profile/Profile';
import Dialog from './components/dialog/dialog';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import Sidebar from './components/sidebar/sidebar';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



const App = (props) => {
  return ( 
    <Router>
      <div className="wrapper-content">
      <Headers />
      </div>
      <div className = "app-wrapper container" >
      <Sidebar store={props.store} />
         <div className="content">
          
           <Switch>
           
              <Route exact path='/' render={ () => 
                            <Profile store={props.store}
                            />}/>
              <Route path='/dialog' 
                     render={ () => <Dialog store={props.store}/>
                              }/>           
              <Route path='/music' component={Music}/>
              <Route path='/news' component={News}/>
              <Route path='/settings' component={Settings}/>
             
           </Switch>
           </div>
      </div> 
    </Router>
  );
}

export default App;