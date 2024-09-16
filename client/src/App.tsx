import { Provider } from 'react-redux';
import './App.css';
import { QueueContainer } from './components/QueueContainer';
import { createStore } from './app-state/store';


const store = createStore()

function App() {
  return (
    <Provider store={store}>
      <QueueContainer/>
    </Provider>
  )
}

export default App;
