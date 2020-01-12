const express = require('express');
const config = require('config');
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const Product = require('../../models/Product');

// @route       GET api/product
// @des         get all products
// @access      Private
router.get('/', auth,
    async (req,res) => {
        try {
            const products = await Product.find()
            res.json(products);
        } catch(err) {
            res.status(500).send('Internal Server Error')
        }
    }
)

router.get('/:id', auth,
    async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if(!product) {
                return res.status(404).json({ msg: 'Product not found'})
            }

            res.status(200).json(product)
        } catch (err) {
            res.status(500).send('Internal Server Error')
        }
    }
)

router.delete('/:id', auth,
    async (req, res) => {
        try {
            const product = await Product.deleteOne(req.params.id);
            if(!product) {
                return res.status(404).json({ msg: 'Product not found or not deleted'})
            }

            res.status(204).send('Deleted successfully')
        } catch (err) {
            res.status(500).send('Internal Server Error')
        }
    }
)

router.post('/', [
    check('name', 'Please provide product name').exists(),
    check('owner', 'Please provide product owner').exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, owner } = req.body;

        try {
            let product = await Product.findOne({ name });
            if (product) {
                return res.status(400).json({ errors: [{ msg: 'Product already exists'}] })
            }

            product = new Product({ 
                name,
                owner
            })
            await product.save();
            return res.status(200).send(`Product with name: ${product.name} created`)
            console.log(`Product with name: ${product.name} created`)
        } catch(err) {
            console.log(err.message)
            res.status(500).send('Internal Server Error')
        }
    }
)

module.exports = router;