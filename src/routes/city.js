const express = require('express')

const router = express.Router()

const path = 'city'

const getAllCities = require('../infra/city/GetAllCities')
const getAllCitiesPaginate = require('../infra/city/GetAllCitiesPaginate')
const postCity = require('../infra/city/PostCity')
const putCity = require('../infra/city/PutCity')
const deletetCity = require('../infra/city/DeleteCity')

router.get(`/${path}`, getAllCities.getAllCities)
router.get(`/${path}/paginate`, getAllCitiesPaginate.getAllCitiesPaginate)
router.post(`/${path}`,postCity.postCity)
router.put(`/${path}/:id`,putCity.putCity)
router.delete(`/${path}/:id`,deletetCity.deletetCity)

module.exports = router