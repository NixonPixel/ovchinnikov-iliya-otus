async function promiseReduce(asyncFunctions = [], reduce, initialValue = 0) {
    let result = initialValue;
    for (let i = 0; i < asyncFunctions.length; i++) {
        try {
            result = reduce(result, await asyncFunctions[i]())
        } catch (e) {
            console.log(e)
        }
    };
    return Promise.resolve(result);
};

const fn1 = () => {
    console.log('1');
    return Promise.resolve(1);
};

const fn2 = () => new Promise(resolve => {
    console.log('2');
    setTimeout(() => resolve(2), 500);
});

const fn3 = () => new Promise(() => {
    console.log('3');
    throw new Error('Упс');
});

promiseReduce(
    [fn1, fn2, fn3],
    function (memo, value) {
        console.log('reduce');
        return memo * value;
    },
    4,
).then(console.log);