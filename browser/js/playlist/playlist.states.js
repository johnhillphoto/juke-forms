'use strict';

juke.config(function ($stateProvider) {

  $stateProvider.state('playlist', {
    url: '/playlist',
    templateUrl: '/js/playlist/templates/playlist.html',
    controller: 'PlaylistCtrl',
    resolve: {
      playlist: function (PlaylistFactory) {
        console.log('state provider');
        //return PlaylistFactory.fetchAll();
      }
    }
  });


});
