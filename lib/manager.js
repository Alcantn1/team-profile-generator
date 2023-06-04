class Manager {
    constructor(name,id,email, OfficeNumber) {
        this.name =name;
        this.id=id;
        this.email=email;
        this.officeNumber=OfficeNumber;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOfficeNumber(){
        return this.OfficeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;