import Culculator from './components/Culculator';
import Header from './components/Header';
import Auth from './components/Auth';
import { Provider } from 'react-redux'
import {store} from './store'
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Culculator />
      <Auth/>
    </Provider> 
  );
}

export default App;
