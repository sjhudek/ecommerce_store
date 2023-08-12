const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const tagRoutes = require('./tag-routes');

router.use('/category', categoryRoutes);
router.use('/product', productRoutes);
router.use('/tag', tagRoutes);

// Catch-all route for undefined routes (make sure this is LAST)
router.use((req, res) => {
    res.status(404).send("Wrong route!");
  });   

module.exports = router;
