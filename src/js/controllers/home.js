function HomeController (ContactService) {

  let vm = this;
  vm.contacts = [];

  function init () {
    console.log("Starting home controller");
    ContactService.allContacts().then((resp) => {
      vm.contacts = resp.data;
    });
  }

  init();
};

HomeController.$inject = ['ContactService'];
export { HomeController };
