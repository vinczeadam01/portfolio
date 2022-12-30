import React from 'react';
import "./background.css"

export default class Background extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = "/utils/particles.js"
    this.instance.appendChild(s);
  }

  render() {
    return (
        <>
            <div id="particles-background" className="particles-box"></div>
            <div id="particles-foreground" className="particles-box"></div>
            <div ref={el => (this.instance = el)} />;
        </>
    )
  }
}