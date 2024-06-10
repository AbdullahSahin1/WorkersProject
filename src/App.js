import './App.css';
import AddWorker from './Components/Workers/AddWorker';

function App() {
  return (
    <div className="App">
    <h1 className='text-white mt-6 text-center text-3xl'>Maaş Otomasyonu</h1>
      <AddWorker></AddWorker>
        <WorkerList workers = {[]}> </WorkerList>
    </div>
  );
}

export default App;
