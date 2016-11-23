function SingleController ($state, ContactService, $stateParams) {

  let vm = this;
  vm.contact = {};

  function init () {

    ContactService.getContact($stateParams.id).then((resp) => {
      vm.contact = resp.data;

    });
  };

  init();

function goMain () {
    $state.go('root.home')
  }
  
};

SingleController.$inject = ['$state','ContactService', '$stateParams'];
export { SingleController };
