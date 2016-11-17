(function() {
    function MainCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        
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
        }
        }
    angular
    .module("blocChat")
    .controller('MainCtrl', ['Room', '$uibModal', MainCtrl]);
})();