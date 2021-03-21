import {Component} from 'react'

class TOC extends Component {
    render() {
      var data = this.props.data;
      var dataList = []
      for(let i=0; i < data.length; i++) {
        dataList.push(<li key={data[i].id}><a href={"/content/"+data[i].id}>{data[i].title}</a></li>)
      }
      return (
        <nav>
          <ul>
            {dataList}
          </ul>
        </nav>
      )
    }
  }

  export default TOC