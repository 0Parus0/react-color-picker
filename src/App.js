import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import generatePalette from './colorHelper'
import seedPalettes from './seedPalettes';

import Palette from './components/palette/Palette.component';
import PaletteList from './components/palette-list/PaletteList.component';
import SingleColorPalette from './components/single-color-palette/SingleColorPalette.component';
import NewPaletteForm from './components/new-palette-form/NewPaletteForm.component';
import Page from './components/page/Page.component';

import  './App.css';

/* Class Component */

class App extends Component {

  state = {
    palettes: JSON.parse(localStorage.getItem('palettes')) || seedPalettes
  }
  findPalette = (id) => {
    return this.state.palettes.find(palette => palette.id === id)
  }

  deletePalette = (id) => {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    );
  }
  savePalette = (newPalette) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    );
  }
  syncLocalStorage = () => {
    //save palettes to local storage
    window.localStorage.setItem(
      "palettes",
      JSON.stringify(this.state.palettes)
    );
  }
  
  render() {
    return (
      <Route render={({ location }) =>(
        <TransitionGroup>
          <CSSTransition key={location.key} classNames='fade' timeout={500}>
            <Switch location={ location }>
              <Route
                exact 
                path="/palette/new" 
                render={ routeProps => 
                  <Page>
                    <NewPaletteForm {...routeProps} savePalette={this.savePalette} palettes={this.state.palettes} />
                  </Page>} />
              <Route
                exact 
                path="/" 
                render={ routeProps => 
                  <Page>
                    <PaletteList palettes={this.state.palettes} {...routeProps} deletePalette={this.deletePalette}/>
                  </Page>} />
              <Route
                exact
                path="/palette/:id"
                render={ routeProps =>(
                <Page>
                  <Palette
                    palette={generatePalette(this.findPalette(routeProps.match.params.id))}
                  />
                </Page>
              ) } />
              <Route 
                exact
                path="/palette/:paletteId/:colorId"
                render={ routeProps => ( 
                  <Page>  
                    <SingleColorPalette 
                    palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
                    colorId={routeProps.match.params.colorId}
                    />
                  </Page>
              )}
             />
             <Route
                render={ routeProps => 
                  <Page>
                    <PaletteList palettes={this.state.palettes} {...routeProps} deletePalette={this.deletePalette}/>
                  </Page>} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
              
      )}/>
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
