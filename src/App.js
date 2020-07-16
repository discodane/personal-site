import React from 'react';
import './App.css';
import aboutList from './assets/aboutList';
import pic from './assets/img/me.png';

const App = () =>  {
  console.log('this is happening')
    return (
      <div className="content">
        <div className='text'>
          <div className="name"><span>Dane Erickson</span></div>
          {aboutList.map((item, iterator) => <div className="listItem" key={ iterator }>{item}</div>)}
        </div>
        <div className="image">
          <img src={pic} alt="me" />
        </div>
    </div>
    );
}

export default App;