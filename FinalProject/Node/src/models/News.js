import DBModel from "../models/DBModel.js";
import getAllNewsQuery from "../db/queries/getAllNews.js";
import getNewsDetailsQuery from "../db/queries/getNewsDetails.js";

class News extends DBModel {
  constructor() {
    super('news');
  }

  getAllNews() {
    //   console.log(this);
    return this.query(getAllNewsQuery);
  }

  async getNewsDetails(newsId) {
    const [details] = await this.query(getNewsDetailsQuery, {newsId}); 

    return details || null;
  }
}

export default News;
