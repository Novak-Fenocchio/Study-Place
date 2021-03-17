import './assets/css/index.css';

import Pomodoro from './components/pomodoro';
import Quotes from './components/quotes';
import Notes from './components/notes';
import Clock from './components/clock';
import Dictionary from './components/dictionary';

function App() {
  return (
    <div className="App">
      <div className='container-sections'>
        <Pomodoro />
        <Quotes/>
        <Notes />
        <Clock/>
        <Dictionary/>
      </div>
    </div>
  );
}

export default App;
