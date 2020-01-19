import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './ColorBox.styles.css'

export class ColorBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      copied: false
    }
  }

  changeCopyState = () => {
    this.setState({copied: true}, () => {
      setTimeout(() => {
        this.setState({copied: false})
      }, 1500)
      
    })
  }

  render() {
    const { background, name } = this.props;
    const { copied } = this.state;
    let style = {background: background}
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className='ColorBox' style={style}>
          <div className={`copy-overlay ${copied && `show`}`} style={style}></div>
          <div className={`copy-msg ${copied && `show`}`} >
            <h1>copied!</h1>
            <p>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipboard>
    )
  }
}

export default ColorBox
