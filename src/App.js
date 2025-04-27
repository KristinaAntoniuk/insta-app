import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import NoMatch from './Pages/404/404';

class App extends React.Component {
  state = {
    isLog: false
  }

  handleLogin = (isLog) => {
    this.setState({isLog})
  }
    

  render(){
    const {isLog} = this.state;
    
    return (
      <div>
          <Router>
            <Routes>
              {
                !isLog ?
                <Route path='/' element={<Login isLogin={this.handleLogin} />} /> :
                <Route path="/*" element={<Home handleLogged={this.handleLogin} />} />
              }
              <Route path='*' element={<NoMatch/>}/>
            </Routes>
          </Router>
      </div>
    );
  }
}

export default App;
