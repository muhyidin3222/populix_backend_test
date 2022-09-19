'use strict';

const globalAuth = _lib('globalAuth')

const Product = _model.product;

exports.getAll = async (req, res, next) => {
  try {
    await globalAuth(req, res, next)
    let resProduct = await Product.findAll({
      order: [['createdAt', 'DESC']],
    });
    res.success(resProduct);
  } catch (err) {
    res.error(err);
  }
};
