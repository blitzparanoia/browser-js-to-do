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
    } else if (input == 'new'){
        const newTodo = prompt('Ok, What is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list.`)
    } else if (input == 'delete'){
        const index = parseInt(prompt('Enter an index to delete:'));
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`You have deleted ${deleted[0]}`);
        } else {
            console.log(`Unknown index`)
        }
    }
    input = prompt ('what would you like to do?')
}
console.log('OK, you quit the app')