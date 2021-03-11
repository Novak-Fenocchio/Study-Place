import logo from './logo.svg';
import './assets/css/index.css';

import Pomodoro from './components/pomodoro';
import Quotes from './components/quotes';
import Notes from './components/notes';

function App() {
  return (
    <div className="App">
      <div className='container-sections'>
        <Pomodoro />
        <Quotes/>
        <Notes />
      </div>
    </div>
  );
}

export default App;
