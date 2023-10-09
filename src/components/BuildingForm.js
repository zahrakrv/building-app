import axios from 'axios';
import { useContext, useEffect, useRef, useState } from 'react';
import { LoadingContext } from '../context/LoadingContext';

const BuildingForm = () => {
  const [buildings, setBuildings] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [Plak, setPlak] = useState('');
  const [floorsCount, setFloorsCount] = useState('');
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState(null);

  const isMounted = useRef(false);
  const { loading, setLoading } = useContext(LoadingContext);

  const fetchBuildings = () => {
    setLoading(true);
    axios
      .get('http://82.115.18.198:4000/api/buildings')
      .then((res) => {
        if (isMounted.current) setBuildings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  useEffect(() => {
    isMounted.current = true;
    fetchBuildings();
    return () => {
      isMounted.current = false; // set to false when component unmounts
    };
  }, []);

  console.log(buildings);

  const handleUpdate = (id) => {
    const updatedData = buildings?.find((building) => building?.id === id);
    if (updatedData) {
      setName(updatedData.name);
      setAddress(updatedData.address);
      setPlak(updatedData.Plak);
      setFloorsCount(updatedData.floorsCount);
      setDescription(updatedData.description);
      setEditId(updatedData.id);
    }
  };
  const submitBuildingForm = (e) => {
    e.preventDefault();
    if (editId) {
      axios
        .put(`http://82.115.18.198:4000/api/buildings/${editId}`, {
          name,
          address,
          Plak,
          floorsCount,
          description,
        })
        .then((res) => {
          setBuildings(
            buildings.map((building) =>
              building.id === editId ? res.data : building
            )
          );
          // setEditMode(false);
          setEditId(null);
          setName('');
          setPlak('');
          setAddress('');
          setFloorsCount('');
          setDescription('');
          fetchBuildings();
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post('http://82.115.18.198:4000/api/buildings', {
          name,
          address,
          Plak,
          floorsCount,
          description,
        })
        .then((res) => {
          setBuildings([...buildings, res.data]);
          setName('');
          setAddress('');
          setPlak('');
          setFloorsCount('');
          setDescription('');
          fetchBuildings();
        })
        .catch((err) => console.log(err));
    }
  };

  // const handleDeleteBuilding = (id) => {
  //   axios
  //     .delete('http://82.115.18.198:4000/api/buildings/' + id)
  //     .then((res) => {
  //       console.log(res.data);
  //       fetchBuildings();
  //     })
  //     // .then(res => setBuildings(buildings.filter(building => building.id!== id)))
  //     .catch((err) => console.log(err));
  // };
  const handleDeleteBuilding = (id) => {
    axios
      .delete(`http://82.115.18.198:4000/api/buildings/${id}`)
      .then((res) =>
        setBuildings(buildings.filter((building) => building.id !== id))
      )
      .then((data) => fetchBuildings())
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="flex flex-col content-center items-center h-screen"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-full max-w-lg">
        <h1 className="font-bold text-gray-700 text-center text-3xl m-6">
          تعریف ساختمان جدید
        </h1>
        <form
          onSubmit={submitBuildingForm}
          className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              نام ساختمان:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="نام ساختمان"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">آدرس:</label>
            <textarea
              rows="7"
              className="block p-2.5 w-full  text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="آدرس..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">پلاک:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="پلاک"
              value={Plak}
              onChange={(e) => setPlak(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              تعداد طبقات:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="تعداد طبقات"
              value={floorsCount}
              onChange={(e) => setFloorsCount(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              توضیحات:
            </label>
            <textarea
              rows="7"
              className="block p-2.5 w-full  text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="توضیحات..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ثبت
            </button>
          </div>
        </form>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light">
                  <thead className="border-b font-medium text-center dark:border-neutral-500">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        ردیف
                      </th>
                      <th scope="col" className="px-6 py-4">
                        نام ساختمان
                      </th>
                      <th scope="col" className="px-6 py-4">
                        آدرس
                      </th>
                      <th scope="col" className="px-6 py-4">
                        پلاک
                      </th>
                      <th scope="col" className="px-6 py-4">
                        تعداد طبقات
                      </th>
                      <th scope="col" className="px-6 py-4">
                        توضیحات
                      </th>
                      <th scope="col" className="px-6 py-4">
                        عملیات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {buildings?.map((building, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b transition duration-300 ease-in-out hover:bg-gray-300 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {building.id}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {building.name}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {building.address}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {building.Plack}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {building.floorsCount}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {building.description}
                          </td>

                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex gap-3">
                              <button
                                className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() => handleUpdate(building.id)}
                              >
                                ویرایش
                              </button>
                              <button
                                className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={() =>
                                  handleDeleteBuilding(building.id)
                                }
                              >
                                حذف
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingForm;
