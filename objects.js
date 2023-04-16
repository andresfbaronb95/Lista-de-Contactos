

function Contact(id, name, phone, { city = "", address = ""}) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.location = {
        city,
        address
    }
}

module.exports = {
    Contact
}