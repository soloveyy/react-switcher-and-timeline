
import './App.css';
import {useState} from 'react'
import {Button} from '@material-ui/core'
import Switcher from './components/Switcher'
import Timeline from './components/Timeline'

function App() {

  const [task, settask] = useState("switcher")

 const setTask = (task) => {
    settask(task)
  }

  return (
    <div className="App">
      <div className="container">
      <div className="buttons-group">
      <Button variant="contained" className="button" color="primary" value="switche" onClick={()=>setTask("switcher")} disableElevation>
        Switcher
      </Button>
      <Button variant="contained" className="button" color="primary"  name="timeline" onClick={()=>setTask("timeline")} disableElevation>
        Time-line
      </Button>
      </div>
        <div className="project">{task === "switcher" ? <Switcher/> : <Timeline/> }</div>
      </div>
    </div>
  );
}

export default App;
