import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles'
import classNames from 'classnames'
// import './ColorBox.styles.css';

import ColorBoxStyles from './ColorBox.styles'  

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

    const { background, name, paletteId, id, showingFullPalette, classes } = this.props;
    const { copied } = this.state;
    // const isDarkColor = chroma(background).luminance() <=0.08;
    // const isLightColor = chroma(background).luminance() >= 0.6;
    let style = {background: background}
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={style}>
          {/* <div className={`${classes.copyOverlay} ${copied && `${classes.showOverlay}`}`} style={style}></div> */}
          <div className={classNames(classes.copyOverlay, {
            [classes.showOverlay]: copied
          })} style={style}></div>
          <div className={`${classes.copyMessage} ${copied && `${classes.showMessage}`}`} >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {
            showingFullPalette && <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
            <span className={classes.seeMore}>MORE</span>
          </Link>
          }
        </div>
      </CopyToClipboard>
    )
  }
}

export default withStyles(ColorBoxStyles)(ColorBox);
