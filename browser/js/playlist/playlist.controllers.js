'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('PlaylistCtrl', function ($scope,$http,PlaylistFactory, $state, PlayerFactory) {

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

juke.controller('PlayListDisplay', function ($scope,$http,$state, playlist,songlist, SongFactory,PlayerFactory) {
 $scope.playlist = playlist;
  console.log("playlist.songs", playlist.songs);
 $scope.songlist=songlist.data;
 console.log('songlist',songlist);

 function cleanUp2 () {
  console.log('trying to clean up')
    $scope.selected = {};
    if ($scope.selected.$dirty === true){
      $scope.selected.$dirty = false;
    }
}

  $scope.toggle = function (song) {
    console.log('tottled');
    console.log('toggle song',song)
    PlayerFactory.start(song);
    console.log(PlayerFactory.getCurrentSong());
  };

 $scope.addSong=function(song,playlistId){
  var ourId=playlistId;
  console.log('song is', song);
  console.log('pl is', playlistId);
  SongFactory.addSong(song,playlistId)
  .then(function(res){
    console.log(res);
    return SongFactory.convert(res.data)

  })
  .then(function(res){
    console.log('what is this?',res);
    $scope.playlist.songs.push(res);
    cleanUp2();
  })


 }
});
