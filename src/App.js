import './App.css';
import Headers from './components/header/Headers';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import MyPosts from './components/my-posts/my-post'

const App = () => {
  return ( 
     <div>
         <Headers />
        <div className="app-wrapper container">
          <Navbar />
          <MyPosts />
          <Profile />
        </div>
     </div>
  );
}

export default App;