(function() {
    function MainCtrl($cookies, Room, Message, $uibModal) {
        this.rooms = Room.all;
        this.getRoomByID = Message.getRoomByID;
        
        this.openModal = function() {
            console.log("open");
            $uibModal.open({
                controller: "modalCtrl",
                controllerAs: "modal",
                templateUrl: "/templates/modal.html",
                size: 'sm'
                })
            }
        
        this.setCurrentRoom = function(room) {
            this.currentRoom = room;
            this.messages = this.getRoomByID(room.$id);
        }
        
        this.sendMessage = function() {
            this.newMessage.roomID = this.currentRoom.$id;
            this.newMessage.username = $cookies.get('blocChatCurrentUser');
            Message.send(this.newMessage);
            this.newMessage = "";
        }
    }
    angular
    .module("blocChat")
    .controller('MainCtrl', ['$cookies', 'Room', 'Message', '$uibModal', MainCtrl]);
})();