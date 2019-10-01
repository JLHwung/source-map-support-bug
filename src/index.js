function foo() {
  console.log(new Error().stack);
}

function bar() {
  foo();
}

bar();
