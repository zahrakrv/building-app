import { useState } from 'react';
const Parking = () => {
  const [isPublicChecked, setIsPublicChecked] = useState(false);
  const [isSelectDisabled, setIsSelectDisabled] = useState(false);

  const handlePublicCheckboxChange = (e) => {
    setIsPublicChecked(e.target.checked);
    setIsSelectDisabled(e.target.checked);
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
          تعریف پارکینگ
        </h1>
        <form className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              شماره / نام :
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="شماره / نام"
            />
          </div>
          <div className="flex gap-10 items-center">
            <div className="mb-4">
              <label className="block text-gray-700  font-bold mb-2">
                مربوط به واحد:
              </label>
              <select
                className={
                  isSelectDisabled
                    ? 'bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3'
                    : 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                }
                type="text"
                disabled={isSelectDisabled}
              >
                <option className="text-gray-700" value="" disabled>
                  لطفا واحد را انتخاب کنید
                </option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <label for="public">عمومی</label>
              <input
                type="checkbox"
                id="public"
                name="public"
                value="عمومی"
                checked={isPublicChecked}
                onChange={handlePublicCheckboxChange}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700  font-bold mb-2">
              شماره طبقه:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="شماره طبقه"
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
    </div>
  );
};

export default Parking;
