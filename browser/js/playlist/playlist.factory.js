'use strict';

juke.factory('PlaylistFactory', function ($http, $q, AlbumFactory, SongFactory) {

  var PlaylistFactory = {};



  PlaylistFactory.create = function (data) {
    console.log(data);
    return $http.post('/api/playlists', data)
    .then(function (response) {
      console.log(response);
      return response.data;
    });
  };


  return PlaylistFactory;

});
