import DBModel from "../models/DBModel.js";
import getAllNewsQuery from "../db/queries/getAllNews.js";

class News extends DBModel {
  constructor() {
    super('news');
  }

  getAllNews() {
    //   console.log(this);
    return this.query(getAllNewsQuery);
  }
}

export default News;
