'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('PlaylistCtrl', function ($scope,$http,PlaylistFactory, $state) {

  function cleanUp () {
    if ($scope.playform.$dirty === true){
      $scope.playform.$dirty = false;
    }

  }
  // if(!$scope.Playlist){
  //   $scope.Playlist={name:'blankman'};
  // }
  $scope.playlists=[];
  $scope.submit=function(){
    PlaylistFactory.create($scope.Playlist)
    .then(function(res){
      cleanUp();
      $scope.Playlist = {};
      $scope.getPlaylists();
      $state.go('playlist', { id: res._id});
    });
  }; //end submit

$scope.getPlaylists = function(){
  PlaylistFactory.getPlaylists()
  .then(function(res){
      $scope.playlists = res;
  });
};

  $scope.getById = function(){
    PlaylistFactory.findById()
    .then(function(res){
        console.log("our res is", res);
        $scope.playlists = res;
    });
};// end getPlaylists

$scope.getPlaylists();


});

juke.controller('PlayListDisplay', function ($scope,$http, playlist) {
 $scope.playlist = playlist;
console.log("playlist.songs", playlist.songs);
});
