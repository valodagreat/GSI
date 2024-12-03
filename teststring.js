// function exampleLinear(n) {
//     for (var i = 0 ; i < n; i++ ) {
//         console.log(i)
//     }
// }

// const startTime = performance.now();
// exampleLinear(1000);
// const endTime = performance.now();

// console.log(`Time taken: ${endTime - startTime} milliseconds`);

// function exampleQuadratic(n) {
//     for (var i = 0 ; i < n; i++ ) {
//      console.log(i);
//      for (var j = i; j < n; j++ ) {
//         console.log(j);
//      }
//      }
// }

// function exampleLogarithmic(n) {
//     for (var i = 2 ; i <= n; i= i*2 ) {
//      console.log(i);
//     }
// }

function Stack(array){
     this.array = [];
     if(array) this.array = array;
}
    
Stack.prototype.getBuffer = function(){
    return this.array.slice();
}
    
Stack.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Stack.prototype.peek = function(){
    return this.array[this.array.length-1];
}

Stack.prototype.push = function(value){
    this.array.push(value);
}

Stack.prototype.pop = function() {
    return this.array.pop();
};

function stackAccessNthTopNode(stack, n){
    var bufferArray = stack.getBuffer();
    if(n<=0) throw 'error'
    var bufferStack = new Stack(bufferArray);

    while(--n!==0){
        bufferStack.pop();
    }
   return bufferStack.pop();
}

function stackSearch(stack, element) {
    var bufferArray = stack.getBuffer();

    var bufferStack = new Stack(bufferArray); // copy into buffer
    
    while(!bufferStack.isEmpty()){
        if(bufferStack.pop()==element){
        return true;
        }
    }
   return false;
}

function Queue(array){
    this.array = [];
    if(array) this.array = array;
}

Queue.prototype.getBuffer = function(){
    return this.array.slice();
}

Queue.prototype.isEmpty = function(){
    return this.array.length == 0;
}

Queue.prototype.peek = function(){
    return this.array[0];
}

Queue.prototype.enqueue = function(value){
    return this.array.push(value);
}

Queue.prototype.dequeue = function() {
    return this.array.shift();
}

function queueAccessNthTopNode(queue, n){
    var bufferArray = queue.getBuffer();
    if(n<=0) throw 'error'

    var bufferQueue = new Queue(bufferArray);

    while(--n!==0){
        bufferQueue.dequeue();
    }
   return bufferQueue.dequeue();
}

function queueSearch(queue, element){
 var bufferArray = queue.getBuffer();

 var bufferQueue = new Queue(bufferArray);

 while(!bufferQueue.isEmpty()){
    if(bufferQueue.dequeue()==element){
        return true;
    }
 }
   return false;
}

// var stack1 = new Stack();
// stack1.push(1);
// stack1.push(8);
// stack1.push(10);
// stack1.push(15);
// console.log(stackSearch(stack1,12));

var queue1 = new Queue();
queue1.enqueue(3);
queue1.enqueue("Habibat");
queue1.enqueue("Anjola");
queue1.enqueue("Mariam");
queue1.enqueue(15);
console.log(queueSearch(queue1, "anjola"))