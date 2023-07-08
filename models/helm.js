import dbPool from "../helper/connection.js";

class Helm{
    static getAll(){
        return dbPool.query('SELECT * FROM helmet_stock');
    }

    static getById(id){
        return dbPool.query('SELECT * FROM helmet_stock WHERE id = ?',[id]);
    }

    static create({merk_helm,size,warna,stock,harga,tgl_masuk}){
        return dbPool.query('INSERT INTO helmet_stock (merk_helm,size,warna,stock,harga,tgl_masuk) VALUES (?,?,?,?,?,now())',[merk_helm,size,warna,stock,harga,tgl_masuk])
    }

    static update(id, {merk_helm,size,warna,stock,harga,tgl_masuk}){
        return dbPool.query('UPDATE helmet_stock SET merk_helm = ?, size = ?,warna =?, stock = ?,harga = ? ',[merk_helm,size,warna,stock,harga]);
    }

    static delete(id){
        return dbPool.query('DELETE FROM helmet_stock WHERE id = ?',[id]);
    }

};

export default Helm;
