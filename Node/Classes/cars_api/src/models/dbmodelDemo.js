//NOT USED


import Knex from 'knex';
import camelize from 'camelize';
import snakeize from 'snakeize';

import connection from "../knexfile.js";

// base model that can be used for all tables

class DBModel {
  constructor(table) {
    this.connection = Knex(connection);
    this.db = connection(table);
  }

  async getAll() {
    // return this.db[this.filename].find();
    const result =  await this.db.select('*');

	return camelize(result);
  }

  async getById(id) {
    // return this.db[this.filename].findOne({_id: id});
    const [result] = await this.db.select('*').where('id', id); //where ({id})

	return result ? camelize(result) : null;
  }

  async findByParams(params) {
    // return this.db[this.filename].findOne(params);
    const [result] = await this.db.select('*').where(snakeize(params)); //has limitations

	return result ? camelize(result) : null;
  }

  async save(data) {
    // return this.db[this.filename].save(data);
    const result = await this.db.insert(snakeize(data)).returning('*');

	return camelize(result);
  }

  async updateById(id, data) {
    // return this.db[this.filename].update({_id: id}, data);
    const result = await this.db.update(camelize(data)).where({ id }).returning('*');

	return camelize(result);
  }

  async removeById(id) {
    // return this.db[this.filename].remove({_id: id});
    const result = await this.db.delete().where({ id });

	return camelize(result);
  }

  async removeByParams(params) {
    const result = await this.db.delete().where(snakeize(params));

    return camelize(result.rows);
  }

  async query(sql, params) {
    const result = await this.connection.raw(sql, params);

    return camelize(result.rows);
  }
}

export default DBModel;