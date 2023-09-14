function upperCase(value) {
    const i = /^[A-Z]\w*$/g;
    if (i.test(value)) {
        console.log(`String's starts with uppercase character`);
    } else {
        console.log(`String's not starts with uppercase character`);
    }
};

upperCase('RegExp');