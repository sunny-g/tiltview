var player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('app', {
    height: window.outerHeight,
    width: window.innerWidth,
    videoId: 'ZqZ9f89Xgcg',
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    },
    playerVars: {
      showInfo: 0,
      modestBranding: 1,
      autoplay: 1
    }
  });
}

function onPlayerReady(evt) {
  console.log('player is ready!', evt);
}

function onPlayerStateChange(evt) {
  console.log('player state has changed!', evt);
}

var queueueueue = ['ZqZ9f89Xgcg', 'p336IIjZCl8', '5wdgrEGE50Q'];

// AIzaSyBXs4ATFQBxkx-cbMAzpR_nlcMXNUsYnbg
