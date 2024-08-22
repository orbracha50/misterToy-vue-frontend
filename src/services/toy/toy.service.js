

import { httpService } from '../http.service'


export default {
    queryToys,
    getById,
    save,
    remove,
    getEmptyToy

}

async function queryToys(filterBy = { txt: '', price: 0 }) {
    let toys = await httpService.get(`toy`)
    if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        toys = toys.filter(toy => regex.test(toy.name))
    }
    if (filterBy.price) {
        toys = toys.filter(toy => toy.price >= filterBy.price)
    }

    return toys
}

async function getById(toyId) {
    return await httpService.get(`toy/${toyId}`)
}



async function remove(toyId) {
    console.log(toyId)
    return await httpService.delete(`toy/${toyId}`)
}

async function save(toy) {
    var savedToy
    if (toy._id) {
        savedToy = await httpService.put(`toy/${toy._id}`, toy)
    } else {
        savedToy = await httpService.post('toy', toy)
    }
    return savedToy
}
async function getEmptyToy() {
    return {

        createdAt: Date.now(),
        imgUrl: "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?auto=compress&cs=tinysrgb&w=400",
        inStock: false,
        labels: ['Doll'],
        name: "Bus",
        owner: null,
        price: 0
    }
}
