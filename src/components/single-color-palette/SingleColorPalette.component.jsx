import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';


import ColorBox from '../color-box/ColorBox.component';
import Navbar from '../navbar/Navbar.component';
import PaletteFooter from '../palette-footer/PaletteFooter.component';

import SingleColorPaletteStyles from './SingleColorPalette.styles';

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: 'hex'
    }
  }

  gatherShades = (palette, colorToFilterBy) => {
    // return all shades of given color;
    let shades = [];
    let allColors = palette.colors;

    for(let key in allColors){
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    return shades.slice(1);
  }

  changeFormat = (val) => {
    this.setState({format: val})
  }

  render() {
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const { format } = this.state;
    const colorBoxes = this._shades.map(color => (
      <ColorBox key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>
    ))
    return (
      <div className={ classes.Palette}>
        <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
        <div className={ classes.colors}>
          {colorBoxes}
          <div className={ classes.goBack}>
            <Link to={`/palette/${id}`} >GO-BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji}/>
      </div>
    )
  }
}

export default withStyles(SingleColorPaletteStyles)(SingleColorPalette)
