import React, { useState, useEffect } from 'react';
import Axios from 'axios';

export default function InputReceived() {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(0);
  const [supplier, setSupplier] = useState('');

  const addData = () => {
    Axios.post('http://localhost:3080/api/create', {
      date: date,
      name: name,
      amount: amount,
      supplier: supplier,
      itemId: name,
      supplierId: supplier,
    }).then(() => {
      console.log('Successed');
    });
  };

  return (
    <div className="container mx-auto space-y-2">
      <div>
        <h1 className="font-sm font-bold">Input Data Barang Masuk</h1>
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
              <option>Pilih Barang</option>
            </select>
          </label>
          <label className="block">
            <span className="text-gray-700">Jumlah (pcs)</span>
            <input
              className="block form-input bg-gray-100 focus:bg-white text-sm rounded-lg border-transparent w-full p-2 mt-1"
              type="number"
              onChange={event => setAmount(event.target.value)}
              />
          </label>
          <label className="block">
            <span className="text-gray-700">Pemasok</span>
            <select
              className="block form-select bg-gray-100 focus:bg-white text-sm rounded-lg border-transparent w-full p-2 mt-1"
              onChange={event => setSupplier(event.target.value)}
              >
              <option>Pilih Pemasok</option>
            </select>
          </label>
        </div>
        <div className="flex justify-end pt-4 gap-2">
          <button className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 text-sm text-red-50 font-bold rounded-lg shadow p-2">Batal</button>
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-sm text-red-50 font-bold rounded-lg shadow p-2"
            onClick={addData}
          >
            Selesai
          </button>
        </div>
      </div>
    </div>
  );
}
