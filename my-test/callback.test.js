test('getData is "jest test"', (done) => {
    function callback(data) {
        expect(data).toBe('jest test');
        done;
    }
    getData(callback); 
});
