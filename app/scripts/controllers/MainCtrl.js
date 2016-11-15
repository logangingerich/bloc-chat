(function() {
    function MainCtrl() {


    }
    
    angular
    .module("blocChat", ["ui.router", "firebase"])
    .controller('MainCtrl', ['Room', MainCtrl]);
})();