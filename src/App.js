import React from 'react';
import {RouteMap} from './Routes';
import './App.css';
import {useUser} from './auth/useUser';

function App() {
  const {user, isLoading} = useUser();
  return (
    <div className="App">
      <RouteMap user={user} isLoading={isLoading} />
    </div>
  );
}

export default App;
