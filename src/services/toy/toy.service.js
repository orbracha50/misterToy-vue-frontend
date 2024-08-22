

import { httpService } from '../http.service'


export default  {
    queryToys,
    getById,
    save,
    remove,
  
}

async function queryToys(filterBy = {txt: ''}) {
    return await httpService.get(`toy` )
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
