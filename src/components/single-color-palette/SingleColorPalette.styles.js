import sizes from '../../sizes';

const SingleColorPaletteStyles = {
  Palette: {
    height: '100vh',
    display: 'flex',
    'flex-direction': 'column',
  },
  
  colors: {
    height: '90%',
  },
  goBack: {
    width: '20%',
    height:"50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
   " margin-bottom": "-3.7px",
    opacity: 1,
    backgroundColor: 'black',

    "& a": {
      width: '100px',
      height: '30px',
      position: 'absolute',
      display: 'inline-block',
      top: '50%',
      left: '50%',
      'margin-left': '-50px',
      'margin-top': '-15px',
      'text-align': 'center',
      outline: 'none',
      background:'rgba(255, 255, 255, 0.3)',
      'font-size': '1rem',
      'line-height': '30px',
      color: 'white',
      'text-transform': 'uppercase',
      border: 'none',
      'text-decoration': 'none',
    },
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.33333%'
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%'
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '10%'
    },
  }
}

export default SingleColorPaletteStyles;