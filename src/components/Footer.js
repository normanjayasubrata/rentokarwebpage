import React, { Component } from 'react'

export class Footer extends Component {
  render() {
      const footerStyle = {
          background: "grey",
          color: "white",
          height: "100%",
          padding: "1%",
          textAlign: "center",
          fontSize: "0.8rem",
          fontStyle: "italic",
          fontWeight: "bold"
          
      }
    return (
      <div style={footerStyle}>
        <h4>Rentokar Member Of Anak Bahagia Group</h4>
      </div>
    )
  }
}

export default Footer
