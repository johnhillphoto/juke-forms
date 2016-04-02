'use strict';

juke.factory('SongFactory', function($http) {

  return {
    convert: function(song) {
      song.audioUrl = '/api/songs/' + song._id + '.audio';
      return song;
    },
    getAll: function() {
      return $http.get('/api/songs/');
    },
    addSong: function(song, playlistId) {
        var tgtUrl = 'api/playlists/' + playlistId + '/songs';
        return $http({
          method: 'POST',
          url: tgtUrl,
          data:{song:song}
        });

      } //addsong
  } //return line 5

});