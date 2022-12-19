const db= require('../util/database')   //importing dbPool

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    
  }
//Delete product from products table
    static deleteById(id) {
      return db.execute('DELETE FROM products WHERE products.id=?',[id])
    }


//All products fetch from products table -->returned to use somewhere else if required
    static fetchAll() {
      return db.execute('SELECT * FROM products');      
    }


//Find product by id from products table ---> use ? and [id] to let mysql inject value 
    static findById(id) {
      return db.execute('SELECT * FROM products WHERE products.id=?',[id])
    }


};    // -----Product class ends here--------
