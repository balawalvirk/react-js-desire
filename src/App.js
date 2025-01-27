import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './components/globals/AppRoutes';

import configureStore from './redux/store';


const store = configureStore();

function App() {
  return (
    <>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App;
