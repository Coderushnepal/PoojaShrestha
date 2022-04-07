import DBModel from "../models/DBModel.js";
import getAllCategoryQuery from "../db/queries/getCategoryDetails.js";

class Category extends DBModel{
  constructor() {
    super('category');
  }

  async getCategoryDetails(categoryId) {
    const [details] = await this.query(getAllCategoryQuery, {categoryId});

    return details || null;
  }
}


export default Category;
