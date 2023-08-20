function delayedPromise(timeout, value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), timeout)
        
        if (timeout <= 0) resolve(value)
    }).then((result) => console.log(result))
}

async function asyncFunction(value = "Пример синтаксиса Promise", timeout= 2000){
    console.log(await delayedPromise(timeout, value))
}

async function promiseFunction() {
    let timeout= 3000
    let promiseValue= "Пример async/await"

    await asyncFunction(promiseValue, timeout)
        .then((result) => console.log(result))
}

asyncFunction()
promiseFunction()