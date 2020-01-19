/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './Navbar.styles.css'
 

export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state={
      format: "hex",
      open: false
    }
  }

  handleFormatChange=(event) => {
    this.setState({format: event.target.value, open: true});
    this.props.handleChange(event.target.value);
    setTimeout(() => {
      this.setState({open: false})
    }, 3000)
       
  }

  closeSnackbar=(event) => {
    this.setState({open: false})
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format, open } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/">ReactColorPicker</Link>
        </div>
        <div className="slider-container">
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider 
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
              
            />
          </div>
        </div>
        <div className="select-container">
          <Select onChange={this.handleFormatChange} value={format}>
            <MenuItem value='hex'>HEX-#ffffff</MenuItem>
            <MenuItem value='rgb'>RGB-(255,255,255)</MenuItem>
            <MenuItem value='rgba'>RGBA-(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>  
        <Snackbar
          anchorOrigin={{vertical: "bottom", horizontal:"left"}} 
          open={open}
          autoHideDuration={3000}
          onClose={this.closeSnackbar}
          message={<span id="message-id"> Format Changed To: {format.toUpperCase()}</span>}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={this.closeSnackbar} key="close">
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />      
      </header>
    )
  }
}

export default Navbar
