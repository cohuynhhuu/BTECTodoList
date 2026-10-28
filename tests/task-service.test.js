import { test } from 'node:test';

// TODO placeholders, NOT passing behavioral tests.
// Tester replaces these with assertions based on approved ACs.
test.todo('AC-01: creates a pending task with a trimmed valid title');
test.todo('AC-02: rejects empty and whitespace-only titles');
test.todo('AC-03: accepts 100 characters and rejects 101');
test.todo('AC-04: toggles only the selected task and supports both directions');
test.todo('AC-04: tasks with the same title remain independent by id');
test.todo('AC-05: stored tasks and completion states survive reload');
test.todo('AC-06: missing data starts with an empty list');
test.todo('AC-07: corrupt or wrong-shaped saved data produces a recoverable result');
test.todo('AC-08: storage failure is reported without claiming data was saved');
