(function() {
    function modalCtrl($uibModalInstance, Room) {
        this.cancel = function() {
            $uibModalInstance.close();
        }
        
        this.addRoom = function(roomName) {
            Room.add(roomName);
            $uibModalInstance.close();
        }
     }
    
    angular
    .module("blocChat")
    .controller('modalCtrl', ['$uibModalInstance', 'Room', modalCtrl]);
})();