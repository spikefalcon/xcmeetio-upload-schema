# xcmeetio-upload-schema

### Summary
This project describes how meet management systems send roster and result data to XCMeet.io.

The object model is described in the `definitions` property of schema.json. All allowed fields,
their field types (e.g. string, number). and a description of the field are included.

The `properties` key describes valid top-level fields. These end up referencing models defined in
the `definitions` key.

To see examples of valid JSON using this schema, click on the links below.

### Examples

* rosters.json shows how to structure athletes and teams. It's important for timers
to send rosters to XCMeet.io prior to the meet. Doing so allows viewers to sign up
for notifications.
* events-simple.json shows how to structure events and results.
* events-splits.json shows how to structure events with results and splits.
* events-records.json shows how to structure events with results and records.
* events-sessions.json shows how to structure events that belong to sessions.

### Validate JSON

Validate your JSON against our schema with [JSON Schema Lint](https://jsonschemalint.com/#/version/draft-06/markup/json).
Or feel free to use the JSON schema validator of your choice.

## Developers

### Tests

A pre-commit hook ensures that schema.json and all examples are validated before commits.

To run tests, run `jasmine` on the command line.