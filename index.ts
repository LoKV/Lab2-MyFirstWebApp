

class Greeter {

    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showGreeting() {
        const row2 = document.getElementById('r1c2');
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName;
    }

    resetGreeting () {
        const row2 = document.getElementById('r1c2');
        row2.innerHTML = 'r1c2';
    }


}
    const greeter = new Greeter('Victor', 'Lo');
