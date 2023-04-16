const { Contact} = require("./objects.js")
const { addContact, deleteContact, showContacts, showContact,  mis_contactos } = require("./actions");

let c1 = new Contact(3, "Jorge", 351654651, { city: "Cali", address: "trans 12"});
console.log("---------ADD CONTACT-------");
addContact(c1);

console.log("-------SHOW CONTACTS-------");
showContacts(mis_contactos);

console.log("-------DELETE CONTACT-------");
deleteContact(3);
showContacts(mis_contactos);

console.log("-------SHOW CONTACT-------");
showContact(mis_contactos, 1)