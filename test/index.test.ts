import { helloworld } from "../src/index";

test('helloworld function must return a "Hello World!" string', function () {
  expect(helloworld()).toBe("Hello World!");
});
