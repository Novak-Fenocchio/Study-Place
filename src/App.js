import logo from './logo.svg';
import './assets/css/index.css';

import Pomodoro from './components/pomodoro';
import Quotes from './components/quotes';

function App() {
  return (
    <div className="App">
      <div className='container-sections'>
        <Pomodoro />
        <Quotes/>
      </div>
    </div>
  );
}

export default App;
