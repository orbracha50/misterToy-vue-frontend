'use strict'

import { dbService } from './db.service.js'

const KEY = 'toys'

export const toyService = {
    query,
    get,
    remove,
    save,
    getEmptyToy,
}

async function query(filterBy = {}) {
    var toys = await dbService.query(KEY)

    console.log(toys)
    if (!toys || !toys.length) {
        toys = _createDefaultToys()
        await dbService.insert(KEY, toys)
    }

    if(filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        toys = toys.filter(toy => regex.test(toy.vendor))
    }
    return toys
}

async function get(id) {
    return await dbService.get(KEY, id)
}

async function remove(id) {
    return await dbService.remove(KEY, id)
}

async function save(toy) {
    if (toy._id) return await dbService.put(KEY, toy)
    else return await dbService.post(KEY, toy)
}

function getEmptyToy() {
    return {
        vendor: '',
        speed: 0,
    }
}

function _createDefaultToys() {
    return [
        _createToy('audi', 50),
        _createToy('fiat', 73),
        _createToy('honda', 100),
        _createToy('suzuki', 100),
    ]
}

function _createToy(vendor, speed) {
    return {
        vendor,
        speed,
    }
}
