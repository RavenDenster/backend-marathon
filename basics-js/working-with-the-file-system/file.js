const fs = require('fs');
const path = require('path');


// create file
const write_async = async () => {
    await new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, 'test.txt'), 'Тут чёт очень важное', (err) => {
            if (err) reject(err);
            console.log('Файл создан');
            resolve();
        });
    });
}

// read file
const read_async = async () => {
    await new Promise((resolve, reject) => {
        fs.readFile(path.resolve(__dirname, 'test.txt'), 'utf8', (err, data) => {
            if (err) reject(err);
            console.log('Содержимое файла:', data);
            resolve(data);
        });
    });
}

// update file
const update_async = async () => {
    await new Promise((resolve, reject) => {
        fs.appendFile(path.resolve(__dirname, 'test.txt'), 'что-то ещё более важное', (err) => {
            if (err) reject(err);
            console.log('Файл обновлен');
            resolve();
        });
    });
}

// delete file
const delete_async = async () => {
    await new Promise((resolve, reject) => {
        fs.unlink(path.resolve(__dirname, 'test.txt'), (err) => {
            if (err) reject(err);
            console.log('Файл удален');
            resolve();
        });
    });
}

const main = async () => {
    await write_async();
    await read_async();
    await update_async();
    await read_async();
    await delete_async();
};
  
main();