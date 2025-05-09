function answer(data, n) {
    let obj = {};
    
    for (const id of data) {
        if (!obj[`${id}`]) {
            obj[`${id}`] = {
                value: 1,
                delete: false
            }
        } else {
            obj[`${id}`].value++;
        }

        if (obj[`${id}`].value > n) {
            obj[`${id}`].delete = true;
        }
    }

    return data.filter(id => !obj[`${id}`].delete)
}

const data = [1,4,23,6,4,3,2]
const result = answer(data, 1)

console.log(result)