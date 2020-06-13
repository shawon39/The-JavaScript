function User() {
    let height = 0;
    let width = 0;
    this.calculate = function() {
        console.log(height*width);
        return height * width;
    }
}

let john = new User();
john.width = 10;
john.height = 5;
john.calculate();