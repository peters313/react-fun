import React from 'react';
import ReactDOM from 'react-dom';

class Layout extends React.Component {
  render() {
    return(
      <h1 style={{color:"red"}}>React Fun!</h1>
    )
  }
}
const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
