class Stack {
    constructor() {
        this.stackItem = [];
        this.count = -1;
        this.maxSize = 4;
    }

    push(ele) {
        if (this.isFull()) {
            console.log('Stack is full');
            return;
        }
        this.count++;
        this.stackItem[this.count] = ele;
    }

    pop() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return undefined;
        }
        const res = this.stackItem[this.count];
        delete this.stackItem[this.count];
        this.count--;
        return res;
    }

    peek() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return undefined;
        }
        return this.stackItem[this.count];
    }

    printStack() {
        if (this.isEmpty()) {
            console.log('Stack is empty');
            return;
        }
        for (let i = 0; i <= this.count; i++) {
            console.log(this.stackItem[i]);
        }
    }

    isFull() {        
        return this.count === this.maxSize - 1;
    }

    isEmpty() {
        return this.count === -1;
    }
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.printStack();
console.log(stack.pop());
console.log(stack.peek());
stack.printStack();