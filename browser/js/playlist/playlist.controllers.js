'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('PlaylistCtrl', function ($scope,$http,PlaylistFactory) {

  console.log('the controller');
  // if(!$scope.Playlist){
  //   $scope.Playlist={name:'blankman'};
  // }
  $scope.playlists=[];
  $scope.submit=function(){
    PlaylistFactory.create($scope.Playlist)
    .then(function(res){
      console.log(res);
      $scope.playlists.push(res);
      console.log($scope.playlists);
    });
  }




});

