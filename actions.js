const {Contact} = require("./objects.js");

let c1 = new Contact(0, "Andres", 3216546897987, {city: "Tunja", address: "calle 20"});
let c2 = new Contact(1, "Daniela", 3216556897987, {city: "Paipa", address: "calle 15"});
let c3 = new Contact(2, "Juan", 321655689, {city: "Bogta", address: "carrera 15"});

let mis_contactos = [c1,c2,c3]; 

const addContact = (contact) => {
    const {id, name, phone, location} = contact;
    const {city, address } = location;
    if(id && name && phone && city && address){
        mis_contactos.push(contact);
        console.log("Contacto añadidio correctamente")
    } else {
        console.log("Los campos no puden estar vacios")
    }
}

const deleteContact = (id)=>{
    const contacto_borrado = mis_contactos.splice(id, 1);
    if (contacto_borrado.length === 0) {
        console.log("El contacto seleccionaado no existe");
    } else {
        console.log("El contacto fue borrado exitosamente");
    }
 
}

const showContacts = (contacts) => {
    console.log(contacts);
}

const showContact = (contacts, id) => {
    console.log(contacts[id]);
}

module.exports = {
    mis_contactos,
    addContact, deleteContact, showContacts, showContact
}

