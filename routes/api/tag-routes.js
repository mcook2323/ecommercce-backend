const router = require('express').Router();
const { Tag, Product, ProductTag, Category } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({ include: [{ model: Product }] });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: 'Tags not found!', error: err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tag = await Tag.findByPk(req.params.id, { include: [{ model: Product }] });
    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id!' });
      return;
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(200).json(newTag);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    await Tag.update(req.body, { where: { id: req.params.id } });
    // Rest of the code for updating product tags
    res.status(200).json({ message: 'Tag updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Tag.destroy({ where: { id: req.params.id } });
    if (!deleted) {
      res.status(404).json({ message: 'No tag with this id!' });
      return;
    }
    res.status(200).json(deleted);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
