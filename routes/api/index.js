const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Default route message for the root
router.get('/', (req, res) => {
    res.send('Welcome to the Ecommerce API. Use /api/products, /api/tags, etc.');
  });

module.exports = router;
