let it = ((arr) => {
    let i = 0
    return {
        next() {
            if (i < arr.length) {
                return { value: arr[i++], done: false }
            } else {
                return { value: undefined, done: true }
            }
        }
    }
})(['吃饭', '睡觉', '打豆豆'])

console.log('customize iterator:')
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

function* genIterator(arr) {
    for (let i = 0; i < arr.length; i++) {
        yield arr[i]
    }
}

console.log('yield iterator:')
const it2 = genIterator(['吃饭', '睡觉', '打豆豆'])
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())
console.log(it2.next())