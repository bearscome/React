import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props
        if(location.state === undefined) {
            history.push('/')
        }
    }

    render() {
        const {location} = this.props;
        console.log(location)
        if(location.state) {
            return (
                <>
                <h3>{location.state.title}</h3>
                <div><img src = {location.state.poster} alt = {location.state.title}/></div>
                <div>{location.state.summary}</div>
                </>
                )
        } else {
            return null;
        }

    }
}
export default Detail