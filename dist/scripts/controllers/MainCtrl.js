(function() {
    function MainCtrl(Room, Message, $uibModal) {
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
        }
    angular
    .module("blocChat")
    .controller('MainCtrl', ['Room', 'Message', '$uibModal', MainCtrl]);
})();