function async_operation() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Async operation complete');
      }, 2000);
    });
}
  
async function handle_async_operation() {
    try {
      console.log('Starting async operation...');
      const result = await async_operation();
      console.log(result);
      console.log('The end of the process')
    } catch (error) {
      console.error('An error occurred:', error);
    }
}
  
handle_async_operation();
  