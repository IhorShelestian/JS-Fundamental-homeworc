function my() {
    new Promise(function (resolve, reject) {
        let number = prompt('enter number');
        if (isNaN(number)) {
            reject();
        } else {
            resolve(number);
        }
    }).catch(function (error) {
        return new Promise(function (resolve, reject) {
            function callback() {
                let number = prompt('enter number');
                if (isNaN(number)) {
                    reject(callback());
                } else {
                    resolve(number);
                }
            }
            callback();
        });
    }).then(function (result) {
        console.log(result);
    });
}

my();