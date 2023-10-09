import { useState } from 'react';

const BuildingUnit = () => {
  const [showSelect, setShowSelect] = useState(false);

  const handleRadioChange = (e) => {
    if (e.target.value === 'tenant') {
      setShowSelect(true);
    } else {
      setShowSelect(false);
    }
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
          تعریف واحدهای ساختمانی
        </h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex gap-10">
            <div>
              <div className="mb-4">
                <label className="block text-gray-700  font-bold mb-2">
                  انتخاب ساختمان
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                >
                  <option className="text-gray-700" value="" disabled>
                    ساختمان را انتخاب کنید
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700  font-bold mb-2">
                  انتخاب طبقه:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                >
                  <option className="text-gray-700" value="" disabled>
                    طبقه را انتخاب کنید
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700  font-bold mb-2">
                  نام واحد / شماره واحد:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="نام واحد / شماره واحد"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700  font-bold mb-2">
                  نام مالک:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                >
                  <option className="text-gray-700" value="" disabled>
                    نام مالک را انتخاب کنید
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <label className="block text-gray-700  font-bold mb-2">
                  نوع واحد:
                </label>
                <select
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                >
                  <option
                    className="text-gray-700"
                    value="واحد را انتخاب کنید"
                    disabled
                  >
                    واحد را انتخاب کنید
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="mb-4 text-gray-700">
                <input
                  type="radio"
                  id="host"
                  name="type"
                  value="host"
                  onChange={handleRadioChange}
                />
                <label htmlFor="host">صاحبخانه</label>
              </div>
              <div className="mb-4 text-gray-700">
                <input
                  type="radio"
                  id="tenant"
                  name="type"
                  value="tenant"
                  onChange={handleRadioChange}
                />
                <label htmlFor="tenant">مستاجر</label>
              </div>
              {showSelect ? (
                <div className="mb-4">
                  <label className="block text-gray-700  font-bold mb-2">
                    نام مستاجر:
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                  >
                    <option
                      className="text-gray-700"
                      value="نام مستاجر را انتخاب کنید"
                      disabled
                    >
                      نام مستاجر را انتخاب کنید
                    </option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </div>
              ) : null}
            </div>
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
    </div>
  );
};

export default BuildingUnit;
