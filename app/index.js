import React from 'react';
import { Provider } from 'react-redux'
import Navigator from './navigation';
import Store from './store'

const App: () => Node = () => {
  
  return (
  	<Provider store={Store}>
    	<Navigator />
    </Provider>
  );
};

export default App;
