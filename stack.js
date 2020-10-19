class Stack{
    constructor(){
        this.stack =[];

    }
    add(item){
        this.stack.push(item);
    }
    remove(item){
        if (this.stack.length)
        return this.stack.pop();
    }
}

const guest = new Stack();
guest.add('Touhidul')
guest.add('Sojib')
guest.add('Alfa')
guest.add('Sakib')
console.log(guest.stack);
const speaker =guest.remove()
console.log(speaker);
console.log(guest.stack);