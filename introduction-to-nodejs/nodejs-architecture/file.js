const fs = require('fs');

fs.readFile('introduction-to-nodejs/nodejs-architecture/text.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});
console.log('some info');

/* т.к. метод readFile асинфронный, то код продолжает работать дальше
 без ожидания завершения чтения файла. Это видно в консоле ибо лог который идёт
 после чтения выполнился раньше. ps*вообще если прям честно объяснять почему там это работает
 нужно объяснять концепуццю event loop, но в задание это не требуется))* */