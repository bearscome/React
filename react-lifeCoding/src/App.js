import {Component} from 'react'
import './App.css';
import TOC from './component/TOC'
import Content from './component/content'
import Subject from './component/Subject'


class App extends Component {
  constructor(prop) {
    super(prop)
    this.state = {
      mode : "welcome",
      Subject : {
        title : "WEB",
        sub : "world wide web!"
      },
      welcome : {title : "Welcome", desc : "Hello REACT!!"},
      contents : [
        {id: 1, title: "HTML", desc:"HTML is for information" },
        {id: 2, title: "CSS", desc:"CSS is design" },
        {id: 3, title: "JavaScript", desc:"JavaScript is for interactive" },
      ]
    }
  }
  render() {
    var _title, _desc = null
    if(this.state.mode ==="welcome") {
      _title = this.state.welcome.title
      _desc = this.state.welcome.desc
    } else if(this.state.mode === "read") {
      _title = this.state.contents[0].title
      _desc = this.state.contents[0].desc
    }
    return (
      <div className="App">
        {/*<Subject title={this.state.Subject.title} sub={this.state.Subject.sub}/>*/}
        <header>
          <h1><a href="/" onClick={function(e) {
            e.preventDefault();
            this.setState({
              mode : 'welcome'
            }) //바로 this.state.mode로 변경하면 리액트는 모름 그래서 this.setState()를 사용해야함 그리고 bind(this)를 해줘야 this 값을 알 수 있음
          }.bind(this)}>{this.state.Subject.title}</a></h1>
            {this.state.Subject.sub}
        </header>
        <TOC data = {this.state.contents}/>
        <Content title={_title} desc= {_desc}/>
      </div>
    )
  }
}

export default App;
