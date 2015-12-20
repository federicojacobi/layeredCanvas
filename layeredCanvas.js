/*
layeredCanvas v0.1

by Federico Jacobi
federicojacobi.com

Abstraction layer on canvas to mimic the use of layers
*/

layeredCanvas = function ( id ) {
	this.layers = [];
	
	var extend = function ( defaults, options ) {
		var extended = {} , prop;
		for (prop in defaults) {
			if (Object.prototype.hasOwnProperty.call(defaults, prop))
				extended[prop] = defaults[prop];
		}
		for (prop in options) {
			if (Object.prototype.hasOwnProperty.call(options, prop))
				extended[prop] = options[prop];
		}
		return extended;
	};

	this.addLayer = function( obj ) {

		layer = extend( {
			id: Math.random().toString(36).substr(2, 5),
			show: true,
			render: function( canvas, ctx ) {}
		}, obj );

		if ( this.getLayer( layer.id ) !== false ) {
			console.log( 'Layer already exists' );
			console.log( obj );
			return false;
		}
		
		this.layers.push( layer );
		return this;
	};
	
	this.getLayer = function( id ) {
		var length = this.layers.length;
		for ( var i = 0; i < length; i++ ) {
			if ( this.layers[i].id === id )
				return this.layers[i];
		}
		return false;
	};
	
	this.removeLayer = function( id ) {
		var length = this.layers.length;
		for ( var i = 0; i < length; i++ ) {
			if ( this.layers[i].id === id ) {
				removed = this.layers[i];
				this.layers.splice( i, 1 );
				return removed;
			}
		}
		return false;
	};
	
	this.render = function() {
		var canvas = this.canvas;
		var ctx = this.ctx2d;
		this.layers.forEach( function( item, index, array ) {
			if ( item.show )
				item.render( canvas, ctx );
		});
	};
	
	this.canvas = document.getElementById( id );
	this.ctx2d = this.canvas.getContext( '2d' );
};