/*
 * For Tips and Advanced Usage read this Blog Post
 * https://levelup.gitconnected.com/integrating-p5-sketches-into-your-react-app-de44a8c74e91
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Sketch from 'react-p5';
import 'p5/lib/addons/p5.sound';
import './styles.css';

class App extends React.Component {
	y = 0;
	direction = '^';
	mySound;

	preload = (p5) => {
		p5.soundFormats('mp3', 'ogg');
		this.mySound = p5.loadSound('https://freesound.org/data/previews/612/612610_5674468-lq');
	};

	setup = (p5, parentRef) => {
		const cnv = p5.createCanvas(200, 200).parent(parentRef);
		cnv.mousePressed(() => {
			this.mySound.play();
		});
		p5.background(220);
		p5.text('tap here to play', 10, 20);
	};

	render() {
		return (
			<div className="App">
				<h1>react-p5 + p5.sound</h1>
				<Sketch preload={this.preload} setup={this.setup} />
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
