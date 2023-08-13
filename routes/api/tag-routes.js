const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product, include: [Tag]}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{
        model: Product,
        include: [Tag]
      }]
    });

    if (!tagData) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const tag = await Tag.create(req.body);
    res.status(200).json(tag);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Error creating the tag" });
  }
});

router.put("/products/:productId/tags", async (req, res) => {
  try {
    const updatedTag = await Tag.update(
      { name: req.body.tags },
      {
        where: { id: req.params.id },
      }
    );
    if (!updatedTag) {
      res.status(404).json({ message: "No tag found with this id!" });
      return;
    }
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Remove associations between the tag and products in the product_tag table
    await ProductTag.destroy({
      where: { tag_id: req.params.id },
    });
    const deletedTag = await Tag.destroy({
      where: { id: req.params.id },
    });

    if (!deletedTag) {
      return res.status(404).json({ message: "No tag found with this ID." });
    }

    res.status(200).json({ message: "Tag deleted successfully." });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
