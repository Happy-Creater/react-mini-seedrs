//2 WAYS TO TEST ASYNC FUNCTIONS

it("async test 1", (done) => {
  setTimeout(done, 100);
});

it("async test 2", () => {
  return new Promise((resolve) => setTimeout(resolve, 500));
});

//THIRD WAY IS WITH delay FROM 'redux-saga'
