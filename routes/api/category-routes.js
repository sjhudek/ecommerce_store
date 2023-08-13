const router = require('express').Router();
const { Category, Product, Tag, ProductTag } = require('../../models');

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
        include: [Tag]
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

router.delete('/:id', async (req, res) => {
  try {
    const deletedCategory = await Category.destroy({
      where: { id: req.params.id }
    });

    if (!deletedCategory) {
      return res.status(404).json({ message: 'No category found with this ID.' });
    }

    res.status(200).json({ message: "Category deleted successfully." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
