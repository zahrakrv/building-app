import { useState, useContext, lazy, Suspense } from 'react';
import { LoadingContext } from '../context/LoadingContext';

const BuildingForm = lazy(() => import('./BuildingForm'));
const BuildingUnit = lazy(() => import('./BuildingUnit'));
const Warehouse = lazy(() => import('./Warehouse'));
const Parking = lazy(() => import('./Parking'));
const PersonForm = lazy(() => import('./PersonForm'));

const Menu = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const { loading } = useContext(LoadingContext);

  const handleClick = (component) => {
    // console.log('handleClick component: ', component);
    // if (component !== 'BuildingForm' || !loading) {
    setSelectedComponent(component);
    // }
    // console.log('selectedComponent: ', selectedComponent);
  };

  let renderedComponent;
  if (selectedComponent === 'PersonForm') {
    renderedComponent = <PersonForm />;
  } else if (selectedComponent === 'BuildingForm') {
    renderedComponent = <BuildingForm />;
  } else if (selectedComponent === 'BuildingUnit') {
    renderedComponent = <BuildingUnit />;
  } else if (selectedComponent === 'Warehouse') {
    renderedComponent = <Warehouse />;
  } else if (selectedComponent === 'Parking') {
    renderedComponent = <Parking />;
  } else {
    renderedComponent = null;
  }
  return (
    <>
      <div>
        <ul className="flex flex-col">
          <li className="flex-1 mr-2">
            <a
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              href="#"
              onClick={() => handleClick('PersonForm')}
            >
              کاربران
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              href="#"
              onClick={() => handleClick('BuildingForm')}
            >
              ساختمان ها{' '}
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              href="#"
              onClick={() => handleClick('BuildingUnit')}
            >
              واحدهای ساختمان{' '}
            </a>
          </li>

          <li className="flex-1 mr-2">
            <a
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
              href="#"
              onClick={() => handleClick('Warehouse')}
            >
              انباری ها{' '}
            </a>
          </li>
          <li className="flex-1 mr-2">
            <a
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
              href="#"
              onClick={() => handleClick('Parking')}
            >
              پارکینگ ها
            </a>
          </li>
          {/* <li className="text-center flex-1">
          <a
            className="block py-2 px-4 text-gray-400 cursor-not-allowed"
            href="#"
          >
            Disabled Item
          </a>
        </li> */}
        </ul>
        {/* {(selectedComponent && <PersonForm />) || <Parking />} */}
        {/* {selectedComponent ? <PersonForm /> : <Parking />} */}

        {/* {renderedComponent} */}
        <Suspense fallback={<div>Loading...</div>}>
          {selectedComponent === 'PersonForm' && <PersonForm />}
          {selectedComponent === 'BuildingForm' && <BuildingForm />}
          {selectedComponent === 'BuildingUnit' && <BuildingUnit />}
          {selectedComponent === 'Warehouse' && <Warehouse />}
          {selectedComponent === 'Parking' && <Parking />}
        </Suspense>
      </div>
    </>
  );
};

export default Menu;
