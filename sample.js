
function asynchronousTask(callback) {
  console.log('Asynchronous task started.');
  setTimeout(() => {
    console.log('Asynchronous task completed after 2 seconds.');
    callback();
  }, 4000);
}

asynchronousTask(() => {
  console.log('Callback from asynchronous task.');
});
console.log('Program continues execution.');