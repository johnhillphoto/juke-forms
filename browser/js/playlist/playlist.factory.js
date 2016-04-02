'use strict';

juke.factory('PlaylistFactory', function ($http, $q, AlbumFactory, SongFactory) {

  var cachedPlaylists = [];
  var PlaylistFactory = {};

  PlaylistFactory.create = function (data) {
    console.log(data);
    return $http.post('/api/playlists', data)
    .then(function (response) {
      var playlist = response.data;
      cachedPlaylists.push(playlist);
      return playlist;
    });
  };

  PlaylistFactory.getPlaylists = function (data) {
    return $http.get('/api/playlists')
    .then(function (response) {
      angular.copy(response.data, cachedPlaylists);
      return cachedPlaylists;
    });
  };

  PlaylistFactory.findById = function (id) {
    return $http.get('/api/playlists/' + id)
    .then(function (response) {
      return response.data;
    });
  };


  return PlaylistFactory;

});
