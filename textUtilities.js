var expect = require('chai').expect;

function titleCase(title) {
    return title;
}

expect(titleCase('The Great Mouse Detective')).to.be.a('string');
expect(titleCase('The Great Mouse Detective'));
