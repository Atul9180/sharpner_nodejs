const Product = require('../models/product');

//add product form
exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};


//controller to save Product data to db FUNCTION: create(creates and save)/build(creates not save)
exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //Product.create({
  req.user.createProduct({      //user is the object created by sequelize and createProduct function by sequelize due to assosciation between user and product
    title:title, 
    imageUrl: imageUrl,
    description: description,
    price: price
    // userId: req.user.id                    //or use "req.user.createProduct()" above
  })
  .then((result)=> res.redirect('/admin/products') )
  .catch(err=>console.log(err));
};


//Edit product by admin
exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  //Product.findByPk(prodId)
  req.user.getProducts({where:{id:prodId}})
  .then(products => {
    const product = products[0];
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  })
  .catch(err=>console.log(err))
};


//update edited product--> find product then take values and save it to db
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId)
  .then(product=>{
    product.title = updatedTitle;
    product.imageUrl = updatedImageUrl;
    product.description = updatedDesc;
    product.price = updatedPrice;
    return product.save();
  })
  .then(result=>{
    console.log('Updated product');
    res.redirect('/admin/products');
  })
  .catch(err=>console.log(err))
};


//get all products on admin Products page
exports.getProducts = (req, res, next) => {
  //Product.findAll()
  req.user
  .getProducts()
  .then((products) => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err=>console.log(err))
};


//delete Porduct by admin from db ---> used destroy({condition which to delete}) or use find product first then destroy
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
  .then(product=>{ 
    return product.destroy()
   })
  .then(result=>{
    //console.log(result)
    res.redirect('/admin/products');
  })
  .catch(err=>console.log(err));  
};
