var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var row2 = document.getElementById('r1c2');
        console.log('row2', row2, 'document', document);
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName;
    };
    Greeter.prototype.resetGreeting = function () {
        var row2 = document.getElementById('r1c2');
        row2.innerHTML = 'r1c2';
    };
    return Greeter;
})();
var greeter = new Greeter('Victor', 'Lo');
var Work = (function () {
    function Work(labTwo) {
        this.labTwo = labTwo;
    }
    Work.prototype.showLab = function () {
        var row1 = document.getElementById('r2c2');
        console.log('row1', row1, 'document', document);
        row1.innerHTML = this.labTwo;
    };
    return Work;
})();
var work = new Work('MyFirstWebApp');
