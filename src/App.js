import './assets/css/index.css';

import Pomodoro from './components/pomodoro';
import Quotes from './components/quotes';
import Notes from './components/notes';
import Dictionary from './components/dictionary';
import Shortcuts from './components/shortcuts';

function App() {
  return (
    <div className="App">
      <div className='container-sections'>
        <Pomodoro />
        <Quotes/>
        <Notes />
        <Dictionary/>
        <Shortcuts/>
      </div>
    </div>
  );
}

export default App;
