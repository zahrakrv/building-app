const PersonForm = () => {
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
          تعریف کاربران
        </h1>
        <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              نام و نام خانوادگی:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="نام و نام خانوادگی"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">سمت:</label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
            >
              <option className="text-gray-700" value="" disabled>
                لطفا سمت را انتخاب کنید
              </option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
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

export default PersonForm;
