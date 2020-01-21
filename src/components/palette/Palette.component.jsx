import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';


import ColorBox from '../color-box/ColorBox.component';
import './Palette.styles.css'
import Navbar from '../navbar/Navbar.component';
import PaletteFooter from '../palette-footer/PaletteFooter.component';
import PaletteStyles from './Palette.styles'
export class Palette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      level: 500,
      format: "hex"
    }
  }

  changeLevel = (level) => {
    this.setState({ level });
    // console.log(level);
  }

  changeFormat = (value) => {
    this.setState({format: value});
  }

  render() {
    const { classes } = this.props;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const  colorBoxes = colors[level].map(color => (
      <ColorBox
        key={color.id}
        background={color[format]} 
        name={color.name}
        id={color.id}
        paletteId={id}
        showingFullPalette
      />
    ))
    return (
      <div className={classes.Palette}>
        <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors/>
        <div className={classes.colors}>
          {/* bunch of color boxes */}
          {colorBoxes}
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default withStyles(PaletteStyles)(Palette)
