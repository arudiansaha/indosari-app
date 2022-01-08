import React, { useState } from 'react';
import Axios from 'axios';
import Pdf from 'react-to-pdf';

export default function PrintReceived() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [receivedList, setReceivedList] = useState([]);

  const searchData = () => {
    Axios.post('http://localhost:3080/api/filter/received', {
      startDate: startDate,
      endDate: endDate,
    })
      .then((response) => {
        setReceivedList(response.data);
    })
      .catch(err => console.log(err));
  };

  const ref = React.createRef();
  const options = {
    orientation: 'potrait',
    unit: 'mm',
    format: [297, 210]
  };

  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-center gap-4">
        <label className="block">
          <span className="text-gray-700">Dari</span>
          <input
            className="block form-input bg-white focus:bg-white text-sm rounded-lg shadow border-transparent w-full p-2 mt-1"
            type="date"
            onChange={event => setStartDate(event.target.value)}
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Sampai</span>
          <input
            className="block form-input bg-white focus:bg-white text-sm rounded-lg shadow border-transparent w-full p-2 mt-1"
            type="date"
            onChange={event => setEndDate(event.target.value)}
          />
        </label>
        <div className="flex flex-col justify-end">
          <button
            className="bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 text-sm text-gray-50 font-bold rounded-lg shadow shadow-gray-500/50 p-2"
            onClick={searchData}
          >
            Cari
          </button>
        </div>
        <div className="flex flex-col justify-end">
          <Pdf targetRef={ref} filename="report.pdf" options={options} x={.5} y={.5} scale={0.81}>
            {({toPdf}) => (
          <button
            className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 text-sm text-blue-50 font-bold rounded-lg shadow shadow-blue-500/50 p-2"
            onClick={toPdf}
          >
            Cetak
          </button>
            )}
          </Pdf>
        </div>
      </div>
      <br />
      <div ref={ref} className="container mx-auto bg-white rounded-lg shadow p-4">
        <div>
          <div className="flex justify-between border-b-4 border-black">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold">CV.INDOSARI</h1>
              <p className="text-sm">Jl. Raya Sapan No. 82B Desa Tegaluar</p>
              <p className="text-sm">Bojongsoang,  BANDUNG 40287</p>
            </div>
            <div className="flex items-end">
              <p className="text-sm">Telp. (022)87108461</p>
            </div>
          </div>
          <br />
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th
                    scope="col"
                    className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6"
                  >
                    Tanggal Masuk
                  </th>
                  <th
                    scope="col"
                    className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6"
                  >
                    Kode Transaksi
                  </th>
                  <th
                    scope="col"
                    className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6"
                  >
                    Nama Barang
                  </th>
                  <th
                    scope="col"
                    className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6"
                  >
                    Jumlah (pcs)
                  </th>
                  <th
                    scope="col"
                    className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6"
                  >
                    Pemasok
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white border border-black">
                {receivedList.map((value) => {
                  return (<tr key={value.id}>
                      <td className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6">{value.dates}</td>
                      <td className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6">{value.id}</td>
                      <td className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6">{value.name}</td>
                      <td className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6">{value.amount}</td>
                      <td className="text-xs text-left text-black font-medium uppercase tracking-wider border border-black py-3 px-6">{value.supplier}</td>
                    </tr>
                )})}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
