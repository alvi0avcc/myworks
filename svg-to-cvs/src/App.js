import logo from './logo.svg';
import './App.css';
import { createInterpolator } from './svg-interpolator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main>
        <p>svg-path-interpolator</p>

        <SvgToCsv/>

      </main>
      
    </div>
  );
}

function SvgToCsv(params) {
  const svgString = `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="792px" height="612px" viewBox="0 0 792 612" enable-background="new 0 0 792 612" xml:space="preserve">
        <g>
            <path id="path3789" d="M287.168,442.411
            c-8.65,0-15.652,7.003-15.652,15.653
            c0,8.65,7.003,15.69,15.652,15.69
            s15.653-7.04,15.653-15.69
            "/>
        </g>
    </svg>
  `;

  const config = {
    joinPathData: false,
    minDistance: 0.5,
    roundToNearest: 0.25,
    sampleFrequency: 0.001
  };
// const interpolator = new SVGPathInterpolator(config);
console.log(0);

const interpolator = createInterpolator( config, '../svg-interpolator/sax-wasm.wasm' ).then(
// const interpolator = createInterpolator( config, './sax-wasm.wasm').then(
  (response)=>{
    console.log(1);
    
    console.log(response);
    
    const bytes = new Uint8Array( svgString.arrayBuffer());
    const pathData = response.processSVG(bytes);
  }
);
}

export default App;
