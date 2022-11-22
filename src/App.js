import './styles/App.scss';
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './data.js'

function App() {

  let tripCards = data.map(trip => {
    return <Card
      {...trip}/>
  })
  return (
    <div className="App">
      <Navbar />
      <div className="card--list">
        {tripCards}
      </div>
    </div>
  );
}

export default App;
