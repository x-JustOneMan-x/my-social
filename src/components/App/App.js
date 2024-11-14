import './App.scss';
import Header from '../Header/header';
import Sidebar from '../Sidebar/sidebar';
import Profile from '../Profile/profile';
import Dialogs from '../Dialogs/dialogs';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import News from '../News/news';
// import Music from '../Music/music';
// import Settings from '../Settings/settings';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="page container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/profile/" element = {<Profile store={props.store} />} />
              <Route path="/dialogs/" element = {<Dialogs store={props.store} />} />
            </Routes>
            {/* <Route path="/news/" element={<News />} />
            <Route path="/music/" component={Music} />
            <Route path="/settings/" component={Settings} /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};


export default App;
