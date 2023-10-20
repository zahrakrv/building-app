import { useState } from 'react';
import PersonForm from './PersonForm';
import Parking from './Parking';
import BuildingForm from './BuildingForm';
import BuildingUnit from './BuildingUnit';
import Warehouse from './Warehouse';
const Menu = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleClick = (component) => {
    setSelectedComponent(component);
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
            <a onClick={() => handleClick('PersonForm')}>کاربران</a>
          </li>
          <li className="flex-1 mr-2">
            <a onClick={() => handleClick('BuildingForm')}>ساختمان ها </a>
          </li>
          <li className="flex-1 mr-2">
            <a onClick={() => handleClick('BuildingUnit')}>واحدهای ساختمانی </a>
          </li>

          <li className="flex-1 mr-2">
            <a onClick={() => handleClick('Warehouse')}>انباری ها </a>
          </li>
          <li className="flex-1 mr-2">
            <a href="#" onClick={() => handleClick('Parking')}>
              پارکینگ ها{' '}
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

        {renderedComponent}
      </div>
    </>
  );
};

export default Menu;
