import './assets/css/index.css';
import './assets/css/mobile.css';

import Pomodoro from './components/pomodoro';
import Quotes from './components/quotes';
import Notes from './components/notes';
import Dictionary from './components/dictionary';
import Shortcuts from './components/shortcuts';
import Photo from './components/photo';

function App() {
  return (
    <div className="App">
      <div className='containerMain-sections'>
        <div className='container-sections'>
          <Pomodoro />
          <Quotes/>
          <Notes />
          <Shortcuts/> 
          <Dictionary/> 
        </div>
    </div>
  </div>
  );
}

export default App;
