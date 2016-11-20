(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        controller: "cookieCtrl",
        controllerAs: "cookie",
        templateUrl: "/templates/cookieModal.html",
        size: 'sm',
        backdrop: 'static',
        keyboard: false        
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();