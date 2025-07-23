function getData(fn) {
    setTimeout(() => {
        fn("Hello");
    }), 100;
}