import { SERVER } from "../server";

function ContactService ($http) {

  this.allContacts = function () {
    return $http.get(SERVER);
  };

  this.addContact = function (contact) {
    return $http.post(SERVER, contact);
  };

  this.getContact = function (id) {
    let web = SERVER + id;
    return $http.get(web);
  };

};

ContactService.$inject = ['$http'];
export { ContactService };
