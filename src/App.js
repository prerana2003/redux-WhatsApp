import { Provider } from 'react-redux';
import './App.css';
import Parent from './components/parent';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import DisplayContact from './components/displayContact';
import { Home } from '@mui/icons-material';




function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Parent/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
