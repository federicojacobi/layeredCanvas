# layeredCanvas
Abstraction layer to do layers on an html canvas element.

Methods:

addLayer( layerObj ) -> add a layer to the canvas. `layerObj = { id: whateveryouwant, show: true/false, render: function( canvas, ctx ) {} }`
The addLayer method is chainable ... so you can do `myCanvas.addLayer( {} ).addLayer( {} ).addLayer( {} );`

removeLayer( id ) -> returns false if the id is not found

getLayer( id ) -> returns the layer object, so you can update it. 

render() -> once you are ready to draw/redraw call this.

## Installation
Just include layeredCanvas.js to your page. As in `<script src="layeredCanvas.js"></script>`

## Usage
1. Make sure your markup has the `<canvas id="theId">` element.
2. Create the JS object with the id reference:   `myLayeredCanvas = new layeredCanvas( "theId" );`
3. Add the layers with their content:  `myLayeredCanvas.addLayer( { id: 'myLayerId', show: true, render: function( canvas, ctx ) { //do the usual canvasy stuff using ctx as context2d or canvas as the actual canvas element } } );`
4. Call `myLayeredCanvas.render();`

Better instructions coming soon!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History
12/20/2015 - First version born