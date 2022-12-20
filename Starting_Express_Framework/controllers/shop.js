const Product = require('../models/product');
const Cart = require('../models/cart');


//---Products page get all products controller
  exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then((productsData) => {
        res.render('shop/product-list', {
        prods: productsData,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err=>console.log(err))
  };


//---Product Detail page get detailed product controller -->getting one product
  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findByPk(prodId)
    .then(product=>{
        res.render('shop/product-detail', {
        product: product,
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err=>console.log(err))
  };


//---used fndAll returned promise to populated data from products table
  exports.getIndex = (req, res, next) => {
    Product.findAll()
      .then((productsData)=>{
          res.render('shop/index', {
            prods: productsData,
            pageTitle: 'Shop',
            path: '/'
          });
      })
      .catch(err=>console.log(err));  
    };


exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.findAll()
    .then(products => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        );
        if (cartProductData) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
        products: cartProducts
      });
    })
    .catch(err=>console.log(err))
  });
};


exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};


exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;

  

  Product.findByPk(prodId, product => {
    Cart.deleteProduct(prodId, product.price);
    res.redirect('/cart');
  });
};

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
