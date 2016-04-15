class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.opts = {
      height: window.outerHeight - 300,
      width: window.outerWidth - 50,
    };
  }

  render() {
    console.log('react youtube', ReactYouTube);
    return (
      <div>
        <ReactYouTube
          videoId={this.props.videoId}
          opts={this.state.opts}
        />
      </div>
    )
  }
}
