class App extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.queue = [
      'U37lyRoECn4',
      'W7ImIzJJGEA',
      '0JboM-STb4E',
    ];
  }

  render() {
    return (
      <div>
        <VideoPlayer videoId={this.state.queue[0]}/>
        <Controls />
      </div>
    );  
  }
}

function onYouTubeIframeAPIReady() {
  ReactDOM.render(<App />, document.getElementById('app'));
  player = 
}

