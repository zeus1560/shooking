test('getData is "jest test"', () => {
    return getData().then(data => {
        console.log(data);
        expect(data).toBe('jest test');
    });
});