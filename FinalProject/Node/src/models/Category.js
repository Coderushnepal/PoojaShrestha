import DBModel from "../models/DBModel.js";
// import getAllCategoryQuery from "../db/queries/getAllCategory.js";

class Category extends DBModel{
  constructor() {
    super('category');
  }

  // getAllCategory() {
  //   //   console.log(this);
  //   return this.query(getAllCategoryQuery);
  // }
}


export default Category;
