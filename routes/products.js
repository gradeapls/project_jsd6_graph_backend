const express = require('express');
const router = express.Router();
const Product = require('../models/Product.js');
const Company = require('../models/Company.js');
const USersDataApi = require('../models/UsersApi.js');

router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        const companies = await Company.find();
        const usersData = await USersDataApi.find();
        res.send({
            datahealth : products,
            datacompany : companies,
            datausers : usersData
        });
    } catch (err) {
        next(err);
    }
});

router.get('/:name', async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.name);
        res.json(products);
    } catch (err) {
        next(err);
    }
});

router.get('/test', async (req, res, next) => {
    try {
        const companies = await Company.find();
        console.log(companies)
        res.json(companies);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const company = await Company.findById(req.params.id);
        console.log(company);
        res.json(company);
    } catch (err) {
        next(err);
    }
});

router.get('/usersdata', async (req, res, next) => {
    try {
        const usersData = await USersDataApi.find();
        res.json(usersData);
    } catch (err) {
        next(err);
    }
});

module.exports = router;