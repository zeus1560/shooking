test('getData is "jest test"', async () => {
    await getData().then(Data => {
        console.log(data);
        expect(data).toBe('jest test');
    });
});