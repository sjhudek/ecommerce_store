const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

// Catch-all route for undefined routes (make sure this is LAST)
router.use((req, res) => {
    res.status(404).send("Wrong route!");
  });

module.exports = router;
