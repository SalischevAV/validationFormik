import React from 'react';
import FormikCreateUser from './components/FormikCreateUser';
import CreateUser from './components/CreateUser';
import Users from './components/Users';



function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className='row'><FormikCreateUser /></div>         
        </div>
        <div className='col'>
          <div className='row'> <CreateUser /></div>          
        </div>
      </div>
      <div className='row'><Users /></div>
    </div>
  );
}

export default App;
