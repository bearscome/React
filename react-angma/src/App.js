import './App.css';
import Hello from './component/Hello'
import WelCome from './component/Welcome';
import Styles from './App.module.css';

function App() {

  return (
    <div className="App">
      <Hello/>
      <div className = {Styles.box}>앱</div>
    </div>
  );
}

export default App;
