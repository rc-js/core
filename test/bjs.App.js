const bjs = require('../bin/test.js');

describe('App class', () => {

    document.body.innerHTML =
        '<div data-model="text"></div>';

    test('App object creation', () => {
        let app = new bjs.App('body');
        expect(app.selector).toHaveLength(1);
    });

});