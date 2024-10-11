module.exports = {
    name: "Aasit",
    age: 20,
    address: "Bangalore",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    },

    // Add more properties and methods as needed
    // now   want to make the three sum  using function ;
     threesum: function(a, b, c) {
        return a + b + c;
    },
    twosum: function(a, b){
        return a + b;
    }

}
