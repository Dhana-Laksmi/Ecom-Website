const ProductModel = require("../models/productModel");

//GET Products API- /api/v1/products
exports.getProducts = async (req, res, next) => {

 const query= req.query.keyword?{
    name:{
      $regex: req.query.keyword,
      $options:'i'
    }
  }:{}
  const products = await ProductModel.find(query);

  res.json({
    success: true,
    message: "Get Products Working !",
    data: products,
  });
};

//GET Single Product API- /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    res.json({
      success: true,
      message: "Get single Products Working !",
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};
