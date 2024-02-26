import { Provider } from 'react-redux';
import './App.css';
import Parent from './components/parent';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Parent/>
    </Provider>
    
  );
}

export default App;
