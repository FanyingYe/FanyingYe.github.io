/*
 * All the boilerplate from the first example is here,
 * you just provide makeSceneGraph()
 */

// Global variables
var scene, renderer, camera, controls;

window.onload = function () {
	// See if our browser has webgl
	if( Detector.webgl ) {
		renderer = new THREE.WebGLRenderer( { antialias: true } );
		renderer.setClearColor( new THREE.Color ("lightgrey"))
	}
	// else use a substitute renderer, but may be slow
	else {
		renderer = new THREE.CanvasRenderer();
	}
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById('theContainer').appendChild(renderer.domElement);

	// Create the scene
	scene = new THREE.Scene();

	// Put a camera into the scene
	camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.set(0, 0, 5);
	scene.add(camera);

	// Create a camera contol
	controls = new THREE.OrbitControls( camera );
	controls.addEventListener( 'change', render );

	// Add our stuff to the scene, kept in a separate function
	makeSceneGraph()

	render()
	animate()
}

// Animation loop
function animate() {
	requestAnimationFrame( animate );
	controls.update()
}

// Render the scene
function render() {
	renderer.render( scene, camera );
}

// In case window is resized
window.onresize = function () {
	renderer.setSize( window.innerWidth, window.innerHeight );

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	render();
}
