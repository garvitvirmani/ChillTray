import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Follow from './Follow';
import Feed from './Feed';
import Recent from './Recent';

function App() {
  return (
    <div className="App">
       
       <Header />

      <div className='app_body'>
        <Sidebar></Sidebar>
        <Feed></Feed>
        {/*follow*/}
        <div className='rightbar'>
        <table>
          <tr><Recent></Recent></tr>
          <tr><Follow></Follow></tr>
        </table>
        </div>
      </div>
    </div>
  );
}

export default App;
