let input = prompt('what would you like  to do?');
const todos= ['thing one', 'thing two'];

while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***************')
        //print out the array and the index using a for loop
        for(let i = 0; i < todos.length; i++){
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***************')
    }
    input = prompt ('what would you like to do?')
}
console.log('OK, you quit the app')