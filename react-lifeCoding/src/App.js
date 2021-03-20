import {Component} from 'react'
import './App.css';
import TOC from './component/TOC'
import Content from './component/content'
import Subject from './component/Subject'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"/>
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Language"/>
      </div>
    )
  }
}

export default App;
