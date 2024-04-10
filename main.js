/* const myPrmise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("bachi");
    reject('Reject') 
  }, 3000);
});

const secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("second Promise");
  }, 1000);
});


Promise.allSettled([myPrmise,secondPromise]).then(res => {
    console.log(res)
})
 */




/* const first = new Promise((res,rej) => {
    setTimeout(() => {
        rej(10)
    },1000)
})

const second = new Promise((res) => {
    setTimeout(() => {
        res(15)
    },500)
})

Promise.any([first,second]).then(res => {
    console.log(res)
}) */


/* const sleep = (sec) => {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, sec)
    })
}

async */


function a(){
    console.log('first function')
    b()
}

function b(){
    console.log('second function')
}

function c(){
    b()
    a()
}

c()


async function main(){
    console.log(first)
    sleep()
    console.log(first)
}



/* Promise.all([first,second]).then(([gio,bachi]) => {
    const plus = gio + bachi
    console.log(plus)
})
 */




/* Promise.any([myPrmise,secondPromise,fetchData()]).then(res => {
    console.log(res)
}) */


/* const fetchData = () => new Promise((res, rej) => [
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((resp) => resp.json())
    .then((result) => res(result)),
]); */



/* Promise.race([myPrmise,secondPromise,fetchData()]).then(res => {
    console.log(res)
})
 */



/* Promise.all([myPrmise, secondPromise,fetchData()]).then(([promise1, promise2,fetchdata]) => {
  console.log(promise1, "1");
  console.log(promise2, "2");
  console.log(fetchdata)
}).catch(er => {
    console.log(er,'error')
}) */

/* myPrmise.then(res => console.log(res))
console.log('gela') */

/* myPrmise.then((res) => {
    console.log(res)
    return secondPromise
}).then((res) => {
    console.log(res)
}).catch(er => {
    console.log(er,'errori')
}) */

/* myPrmise.then(res => console.log(res)).catch(er => console.log(er,'erorr')) */
