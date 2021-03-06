import chroma from 'chroma-js';
import sizes from '../../sizes';


const ColorBoxStyles = {
  ColorBox: {
    width: '20%',
    height: (props) => props.showingFullPalette ? "25%" : "50%",
    margin: "0 auto",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
   " margin-bottom": "-4.5px",
   "&:hover button": {
     opacity: 1
   },
   [sizes.down('lg')]: {
    width: '25%',
    height: (props) => props.showingFullPalette ? "20%" : "33.33333%",

   },
   [sizes.down('md')]: {
    width: '50%',
    height: (props) => props.showingFullPalette ? "10%" : "20%",

   },
  //  [sizes.down('sm')]: {
  //   width: '25%',
  //   height: (props) => props.showingFullPalette ? "20%" : "50%",

  //  },
   [sizes.down('xs')]: {
     width: '100%',
     height: props => props.showingFullPalette ? '5%' : '10%'
   }
   
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    padding: "10px",
    bottom: "0px",
    color: "black",
    "letter-spacing": "1px",
    "text-transform": "uppercase",
   },
   copyOverlay: {
    opacity: 0,
    width: '100%',
    height: '100%',
    transition: 'transform 0.6s ease-in-out',
    transform: 'scale(0.1)',
    'z-index': 0,
   },
  copyText: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white"
  },
  colorName: {
    color: props => chroma(props.background).luminance() <= 0.7 ? "white" : "black"
  },
  seeMore: {
    color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    background:" rgba(255, 255,255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0px",
    width: "60px",
    height: "30px",
    "text-align": "center",
    "line-height": "30px",
    "text-transform": "uppercase",
  },
  showOverlay: {
    opacity: '1',
    transform: 'scale(50)',
    'z-index': '10',
    position: 'absolute',
  },
  copyButton: {
   color: props => chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    width: '100px',
    height: '30px',
    position: 'absolute',
    display: 'inline-block',
    top: '50%',
    left: '50%',
    outline: 'none',
    background: "rgba(255, 255, 255, 0.3)",
    border: 'none',
    opacity: 0,
    "margin-left": '-50px',
    "margin-top": '-15px',
    "text-align": 'center',
    "font-size": '1rem',
    "line-height": '30px',
    "text-transform": 'uppercase',
    "text-decoration": 'none',
  },
  copyMessage: {
    position: "fixed",
    left: "0",
    top: "0",
    right: "0",
    bottom: "0",
    display: "flex",
   "flex-direction": "column",
    "align-items": "center",
    "justify-content": "center",
    "font-size": "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      'font-weight':' 400',
      'text-shadow': '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      'text-align':' center',
      'margin-bottom':' 0',
      padding:' 1rem',
      'text-transform':' uppercase',
      [sizes.down('xs')]: {
        fontSize: '6rem'
      }
    },
    "& p": {
      'font-size': '2rem',
      'font-weight': 100,
    }
  },
  showMessage: {
    opacity: 1,
    transform: 'scale(1)',
    'z-index': '25',
    transition: 'all 0.4s ease-in-out',
    'transition-delay': '0.3s',
  }
}

export default ColorBoxStyles;