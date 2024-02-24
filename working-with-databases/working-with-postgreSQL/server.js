const crud = require('./controller');

async function createUser() {
    try {
        const user = await crud.createUser('John Doe', 'john.doe@example.com');
        console.log('Created user:', user);
    } catch (error) {
        console.error('Error creating user:', error);
    }
}

async function getUsers() {
    try {
        const users = await crud.getUsers();
        console.log('Users:', users);
    } catch (error) {
        console.error('Error getting users:', error);
    }
}

async function updateUser() {
    try {
        const user = await crud.updateUser(1, 'Jane Smith', 'jane.smith@example.com');
        console.log('Updated user:', user);
    } catch (error) {
        console.error('Error updating user:', error);
    }
}

async function deleteUser() {
    try {
        const user = await crud.deleteUser(1);
        console.log('Deleted user:', user);
    } catch (error) {
        console.error('Error deleting user:', error);
    }
}

async function main() {
    createUser();
    getUsers();
    updateUser();
    deleteUser();
}

main()
