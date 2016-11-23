function SingleController ($state, ContactService, $stateParams) {

  let vm = this;
  vm.contact = {};
  this.gotoMain = gotoMain;

  function init () {

    ContactService.getContact($stateParams.id).then((resp) => {
      vm.contact = resp.data;

    });
  };

  init();

  function gotoMain () {
    $state.go('root.home');
  }

};

SingleController.$inject = ['$state','ContactService', '$stateParams'];
export { SingleController };
