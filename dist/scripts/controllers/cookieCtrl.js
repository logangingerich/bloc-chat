(function() {
    function cookieCtrl($cookies, $uibModalInstance) {
            this.confirm = function(username) {
                $cookies.put("blocChatCurrentUser", username);
                if (typeof username == "string") {
                    $uibModalInstance.close();
                }
        }
    }
    angular
    .module("blocChat")
    .controller('cookieCtrl', ['$cookies', '$uibModalInstance', cookieCtrl]);
})();