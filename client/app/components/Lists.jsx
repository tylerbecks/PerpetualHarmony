import React from 'react';


export default class ListOfEatUp extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    var resultStuffs = this.props.sessions.map(result => <div> {result.location} </div>)
    return (
      <div>
      <h1>Hello</h1>
      {resultStuffs}
      </div>
    )
  }
}
