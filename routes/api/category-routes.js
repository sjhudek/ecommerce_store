const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint
router.get('/', async (req, res) => {
  console.log("Inside GET all categories route");

  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product, include: [Tag]}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/:id', async(req, res) => {
  console.log("Inside GET all categories route");

  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const idData = await Category.findByPk(req.params.id, {
    
      include: [{
        model: Product,
        include: [ProductTag]
      }]
    });

    if (!idData) {
      res.status(404).json({ message: 'No location found with this id!' });
      return;
    }

    res.status(200).json(idData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async(req, res) => {
  console.log("Inside POST all categories route");

  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async(req, res) => {
  console.log("Inside PUT all categories route");

  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id }},
      )
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async(req, res) => {
  console.log("Inside DELETE all categories route");

  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!categoryData) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
