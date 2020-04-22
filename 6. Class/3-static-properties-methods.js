// Static properties and methods

// We can also assign a method to the class function itself, not to its "prototype". Such methods are called static.

class User {
    static staticMethod() {
        alert(this === User);
    }
}
User.staticMethod(); // true

// Example

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(articleA, articleB) {
        return articleA.date - articleB.date;
    }
}

// usage
let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert(articles[0].title); // CSS

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// The first way can be implemented by the constructor. And for the second one we can make a static method of the class.

// Like Article.createTodays() here:

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static createTodays() {
        // remember, this = Article
        return new this("Today's digest", new Date());
    }
}

let article = Article.createTodays();

alert(article.title); // Today's digest

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

// Static Properties

class Article {
    static publisher = "Ilya Kantor";
}

alert(Article.publisher); // Ilya Kantor

// ------------------------------------------------------------------------
// ------------------------------------------------------------------------

class Animal {}
class Rabbit extends Animal {}

// for statics
alert(Rabbit.__proto__ === Animal); // true

// for regular methods
alert(Rabbit.prototype.__proto__ === Animal.prototype); // true