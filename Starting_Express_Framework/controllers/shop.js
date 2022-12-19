const Product = require('../models/product');
const Cart = require('../models/cart');


//---Products page get all products controller
  exports.getProducts = (req, res, next) => {
    Product.fetchAll()
    .then(([productsData,metaData]) => {
        res.render('shop/product-list', {
        prods: productsData,
        pageTitle: 'All Products',
        path: '/products'
      });
    })
    .catch(err=>console.log(err))
  };


//---Product Detail page get detailed product controller -->getting array but expecting obj so use[0]
  exports.getProduct = (req, res, next) => {
    const prodId = req.params.productId;
    Product.findById(prodId)
    .then(([product])=> {
        res.render('shop/product-detail', {
        product: product[0],
        pageTitle: product.title,
        path: '/products'
      });
    })
    .catch(err=>console.log(err))
  };


//---used fetchAll returned promise to populated data from products table using destructuring
  exports.getIndex = (req, res, next) => {
    Product.fetchAll()
      .then(([rowsData,metaData])=>{
          res.render('shop/index', {
            prods: rowsData,
            pageTitle: 'Shop',
            path: '/'
          });
      })
      .catch(err=>console.log(err));  
    };


exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
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
    });
  });
};


exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};


exports.postCartDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
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
