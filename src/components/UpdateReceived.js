import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';

export default function UpdateReceived() {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [supplier, setSupplier] = useState('');

  const [itemList, setItemList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);

  const { id } = useParams();

  const updateData = (id) => {
    Axios.patch(`http://localhost:3080/api/update/received/${id}`, {
      id: id,
      name: name,
      date: date,
      amount: amount,
      supplier: supplier,
      itemId: name,
      supplierId: supplier,
    })
      .then(res =>  console.log(res))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/item')
      .then((response) => {
        setItemList(response.data);
      });
    }, []);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/supplier')
      .then((response) => {
        setSupplierList(response.data);
      });
    }, []);

  return (
    <div className="container mx-auto space-y-2 p-8">
      <div>
        <h1 className="text-md font-bold">Perbaharui Data</h1>
      </div>
      <div className="bg-white text-sm rounded-lg shadow p-4">
        <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4">
          <label className="block">
            <span className="text-gray-700">Tanggal</span>
            <input
              className="block form-input bg-gray-100 focus:bg-white text-sm rounded-lg border-transparent w-full p-2 mt-1"
              type="date"
              onChange={event => setDate(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Nama Barang</span>
            <select
              className="block form-select bg-gray-100 focus:bg-white text-sm rounded-lg border-transparent w-full p-2 mt-1"
              onChange={event => setName(event.target.value)}
            >
              <option disabled>Pilih Barang</option>
              {itemList.map((value) => {
                return <option key={value.id} value={value.name}>{value.name}</option>
              })}
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Jumlah (pcs)</span>
            <input
              className="block form-input bg-gray-100 focus:bg-white text-sm rounded-lg border-transparent w-full p-2 mt-1"
              type="number"
              placeholder="0"
              onChange={event => setAmount(event.target.value)}
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Pemasok</span>
            <select
              className="block form-select bg-gray-100 focus:bg-white text-sm rounded-lg border-transparent w-full p-2 mt-1"
              onChange={event => setSupplier(event.target.value)}
            >
              <option disabled>Pilih Pemasok</option>
              {supplierList.map((value) => {
                return <option key={value.id} value={value.name}>{value.name}</option>
              })}
            </select>
          </label>
        </div>
        <div className="flex justify-end pt-4 gap-2">
          <Link to="/report">
            <button className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 text-sm text-red-50 font-bold rounded-lg shadow shadow-red-500/50 p-2">Batal</button>
          </Link>
          <Link to="/report">
            <button
              className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-sm text-red-50 font-bold rounded-lg shadow shadow-blue-500/50 p-2"
              onClick={() => {updateData(id)}}
            >
              Selesai
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
