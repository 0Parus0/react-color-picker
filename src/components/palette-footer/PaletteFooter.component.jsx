import React from 'react';
import { withStyles } from '@material-ui/styles';

import PaletteFooterStyles from './PaletteFooter.styles';

const PaletteFooter = (props) => {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  )
}

export default withStyles(PaletteFooterStyles)(PaletteFooter)
