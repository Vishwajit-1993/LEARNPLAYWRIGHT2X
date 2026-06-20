// Note: `test(name, callback)` is a real-world callback example. The arrow
// function passed as the second argument is a callback - the test runner (Jest)
// stores it and decides when to execute it. Inside the callback we query an
// element and assert it's in the document. This is the same callback pattern as
// placeOrder, just used by a testing framework.

test('has title', ()=>{
    const element = screen.getByText(/learn react/i);
    expect(element).toBeInTheDocument();
});

test('has title', ()=>{
    const element = screen.getByText(/learn react/i);
    expect(element).toBeInTheDocument();
});

test('has title', ()=>{
    const element = screen.getByText(/learn react/i);
    expect(element).toBeInTheDocument();
});