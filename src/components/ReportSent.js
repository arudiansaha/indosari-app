import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function ReportSent() {
  const [sentList, setSentList] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3080/api/get/sent')
      .then((response) => {
        setSentList(response.data);
        console.log('Success to get data...');
      });
  }, []);

  const deleteData = (id) => {
    Axios.delete(`http://localhost:3080/api/delete/sent/${id}`)
      .then((response) => {
        setSentList(sentList.filter(value => value.id != id));
      });
  };

  return (
    <div className="container mx-auto space-y-2">
      <div className="flex justify-between">
        <div>
          <h1 className="text-md font-bold">Laporang Barang Keluar</h1>
        </div>
        <div>
          <Link to="/print/sent">
          <button className="flex bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-sm text-red-50 font-bold rounded-lg shadow shadow-blue-500/50 p-2 gap-2">
            <p className="text-sm">Cetak</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          </Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-lg shadow border-b border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="text-xs text-left text-gray-500 font-medium uppercase tracking-wider py-3 px-6"
              >
                Tanggal Masuk
              </th>
              <th
                scope="col"
                className="text-xs text-left text-gray-500 font-medium uppercase tracking-wider py-3 px-6"
              >
                Kode Transaksi
              </th>
              <th
                scope="col"
                className="text-xs text-left text-gray-500 font-medium uppercase tracking-wider py-3 px-6"
              >
                Nama Barang
              </th>
              <th
                scope="col"
                className="text-xs text-left text-gray-500 font-medium uppercase tracking-wider py-3 px-6"
              >
                Jumlah (pcs)
              </th>
              <th
                scope="col"
                className="text-xs text-left text-gray-500 font-medium uppercase tracking-wider py-3 px-6"
              >
                Penerima
              </th>
              <th
                scope="col"
                className="text-xs text-left text-gray-500 font-medium uppercase tracking-wider py-3 px-6"
              >
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sentList.map((value) => {
              return (<tr key={value.id}>
                <td className="text-sm text-gray-900 whitespace-nowrap py-4 px-6">{value.dates}</td>
                <td className="text-sm text-gray-900 whitespace-nowrap py-4 px-6">{value.id}</td>
                <td className="text-sm text-gray-900 whitespace-nowrap py-4 px-6">{value.name}</td>
                <td className="text-sm text-gray-900 whitespace-nowrap py-4 px-6">{value.amount}</td>
                <td className="text-sm text-gray-900 whitespace-nowrap py-4 px-6">{value.receiver}</td>
                <td className="text-sm text-gray-900 whitespace-nowrap py-4 px-6">
                  <div className="flex gap-2">
                    <Link to={`/update/sent/${value.id}`}>
                      <button className="bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 text-sm text-red-50 font-bold rounded-lg shadow shadow-yellow-500/50 p-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300 text-sm text-red-50 font-bold rounded-lg shadow shadow-red-500/50 p-2"
                      onClick={() => {deleteData(value.id)}}
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}
