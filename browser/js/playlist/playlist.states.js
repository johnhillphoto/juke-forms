'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('playlistCreate', {
    url: '/playlist',
    templateUrl: '/js/playlist/templates/playlistCreate.html',
    controller: 'PlaylistCtrl'

  });//end state
  $stateProvider.state('playlist', {
    url: '/playlist/:id',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlayListDisplay',
    resolve: {
      playlist: function (PlaylistFactory, $stateParams) {
        console.log("stateParams iz", $stateParams);
        return PlaylistFactory.findById($stateParams.id);
      },
      songlist: function(SongFactory){
        return SongFactory.getAll();
      }
    }
  });//end state


});
