import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'

import Palette from './components/palette/Palette.component';
import seedPalettes from './seedPalettes';
import generatePalette from './colorHelper'
import PaletteList from './components/palette-list/PaletteList.component';

/* Class Component */

class App extends Component {
  findPalette = (id) => {
    return seedPalettes.find(palette => palette.id === id)
  }
  
  render() {
    return (
      <Switch>
        <Route exact path="/" render={(routeProps) => <PaletteList palettes={seedPalettes} {...routeProps}/>} />
        <Route exact path="/palette/:id" render={(routeProps) =>(
          <Palette
            palette={generatePalette(this.findPalette(routeProps.match.params.id))}
          />
        ) } />
        <Route exact path="/palette/:paletteId/:colorId" render={() => <h1>SingleColorPage</h1>} />
      </Switch>
  
    //   {/* <div className="App">
    //     <Palette palette={generatePalette(seedPalettes[4])} />
    //   </div> */}
     );
  }

}

export default App;


/* Functional Component */

// function App() {
//   const findPalette = (id) => {
//     return seedPalettes.find(palette => palette.id === id)
//   }
//   return (

//     <Switch>
//       <Route exact path="/" render={() => <h1>PALETTE LIST GOES HERE</h1>} />
//       <Route exact path="/palette/:id" render={(routeProps) =>(
//         <Palette
//           palette={generatePalette(findPalette(routeProps.match.params.id))}
//         />
//       ) } />
//     </Switch>

//   //   {/* <div className="App">
//   //     <Palette palette={generatePalette(seedPalettes[4])} />
//   //   </div> */}
//    );
// }

// export default App;
