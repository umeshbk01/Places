const db = require("../db/keys").dbpass;


class PlaceDatabase {
    constructor() {
        this.mysql = require('mysql');
        this.util = require('util');
        this.async = require('async');
        this.dbUsername = 'root';
        this.dbPassword = db;
        this.dbName = 'Place'
        this.conn = this.mysql.createConnection({
            host: 'localhost',
            user: this.dbUsername,
            password: this.dbPassword,
            database: this.dbName,
         });
         this.conn.connect();
    }

//promisify the callback func
convertToPromise(func) {
    return this.util.promisify(func).bind(this.conn);
  }

async placeQuery(){
    const promisifiedQuery = this.convertToPromise(this.conn.query);
    try {
      const result = await promisifiedQuery('SELECT * from place');
      //console.log(JSON.stringify(result));
      return JSON.stringify(result);
    } catch (error) {
      return Error('error in get all place query');
    }
}

async writePlaceQuery(id, title, description, address, lat, lng){
const promisifiedQuery = this.convertToPromise(this.conn.query);
try {
  const result = await promisifiedQuery(
    `insert ignore into place(id,title,description1,address1,lat,lng) values("${id}","${title}","${description}","${address}","${lat}","${lng}")`
  );
  return 'success';
} catch (error) {
  console.log(error);
  throw Error('error in writePlaceQuery function');
}
}
endConn() {
    this.conn.end();
  }
}
module.exports = PlaceDatabase;
