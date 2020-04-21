var React = require("react");

class PlaylistSongs extends React.Component {
  render() {

    console.log(this.props.songsByPlaylist);
    const songs = this.props.songsByPlaylist.map( song=> {
        return <li>{song.title}</li>
    })

    return (
      <html>
      <head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        </head>

        <body>
          <h1>Playlist: {this.props.playlistName}</h1>
          <div>
          <ol>
              {songs}
          </ol>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = PlaylistSongs;