var Ajv = require('ajv');
var ajv;
var fs = require('fs');

describe('Ensure Validation', function () {
    beforeEach(function () {
        ajv = new Ajv();
    });

    it('of Schema JSON', function () {
        var schema = fs.readFileSync('./schema.json');
        try {
            JSON.parse(schema);
        } catch (e) {
            fail('JSON is invalid. Error: ' + e);
        }
    });

    it('of Schema File', function () {
        var schema = fs.readFileSync('./schema.json');
        try {
            var validate = ajv.compile(JSON.parse(schema));
        } catch (e) {
            fail('JSON schema is invalid. Error: ' + e);
        }
    });

    it('of Example JSON files', function () {
        var files = fs.readdirSync('./examples');

        for (var i = 0; i < files.length; i++) {
            try {
                var fileData = fs.readFileSync('./examples/' + files[i]);
                JSON.parse(fileData.toString());
            } catch (e) {
                fail('JSON is invalid. Error: ' + e);
            }
        }
    });

    it('of Examples Files against Schema', function () {
        var schema = fs.readFileSync('./schema.json');
        var validate = ajv.compile(JSON.parse(schema));

        var files = fs.readdirSync('./examples');

        for (var i = 0; i < files.length; i++) {
            var fileData = fs.readFileSync('./examples/' + files[i]);
            validate(JSON.parse(fileData.toString()));
            if (validate.errors != null) {
                fail("Validation error for " + files[i] + ": " + JSON.stringify(validate.errors));
            }
        }
    });
});
