import logo from './logo.svg';
import './assets/css/index.css';

import Pomodoro from './components/pomodoro';

function App() {
  return (
    <div className="App">
      <div className='container-sections'>
        <Pomodoro />
      </div>
    </div>
  );
}

export default App;
