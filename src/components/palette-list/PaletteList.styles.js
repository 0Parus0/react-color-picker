import sizes from "../../sizes";
import bg from './bg.svg'

const PaletteListStyles = {
  "@global": {
    ".fade-exit":{
      opacity: 1
    },
    ".fade-exit-active": {
      opacity: 0,
      transition: "opacity 500ms ease-out"
    }
  },

  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    /* background by SVGBackgrounds.com */
    backgroundColor: '#1430aa',
    backgroundImage: `url(${bg})`,
    overflow: 'scroll'
  },
  heading: {
    fontSize: '2rem',
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    [sizes.down('xl')]: {
      width: '80%',
    },
    [sizes.down('xs')]: {
      width: '75%',
    }
  },
  nav: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    color: 'white',
    alignItems: 'center',
    "& a": {
      // textDecoration: 'none',
      color: 'white'
    }
  },

  palettes: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridGap: '1.5rem',
    gridTemplateColumns: 'repeat(3, 30%)',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 50%)'
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '1.4rem',

    }
  },
};

export default PaletteListStyles