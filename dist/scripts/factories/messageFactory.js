(function() {
  function Message($firebaseArray, $cookies) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    
    var getRoomByID = function(roomID) {
        var ref = firebase.database().ref().child("messages").orderByChild("roomID").equalTo(roomID);
        return $firebaseArray(ref);
    }

    return {
      getRoomByID: getRoomByID,
      send: function(newMessage) {
          newMessage.sentAt = firebase.database.ServerValue.TIMESTAMP;
          messages.$add(newMessage);
      } 
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();