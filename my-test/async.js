function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello");
        }), 100;
    })
}