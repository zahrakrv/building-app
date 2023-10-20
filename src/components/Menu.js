import { useState, useContext, useEffect } from 'react';
import PersonForm from './PersonForm';
import Parking from './Parking';
import BuildingForm from './BuildingForm';
import BuildingUnit from './BuildingUnit';
import Warehouse from './Warehouse';

const Menu = () => {
  const [selectedComponent, setSelectedComponent] = useState('');
  const [isBuildingFormLoading, setIsBuildingFormLoading] = useState(false);

  // const componentMap = {
  //   PersonForm: <PersonForm />,
  //   BuildingForm: <BuildingForm />,
  //   BuildingUnit: <BuildingUnit />,
  //   Warehouse: <Warehouse />,
  //   Parking: <Parking />,
  // };
  // let renderedComponent = componentMap[selectedComponent];

  // const handleClick = (component) => {
  //   // console.log('handleClick component: ', component);
  //   if (component !== 'BuildingForm' || !loading) {
  //     setSelectedComponent(component);
  //   }
  //   // console.log('selectedComponent: ', selectedComponent);
  // };
  // const handleClick = (component) => {
  //   if (component !== 'BuildingForm' || !loading) {
  //     setSelectedComponent(component);
  //   }
  // };
  // useEffect(() => {
  //   if (selectedComponent !== 'BuildingForm') {
  //     setIsBuildingFormLoading(false);
  //   }
  // }, [selectedComponent, isBuildingFormLoading]);

  const handleClick = (component) => {
    setSelectedComponent(component);
  };
  // const handleClick = (component) => {
  //   if (component === 'BuildingForm') {
  //     setIsBuildingFormLoading(loading);
  //   }
  //   if (component !== 'BuildingForm' || !isBuildingFormLoading) {
  //     setSelectedComponent(component);
  //   }
  // };

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
            <div
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleClick('PersonForm');
              }}
            >
              کاربران
            </div>
          </li>
          <li className="flex-1 mr-2">
            <div
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleClick('BuildingForm');
              }}
            >
              ساختمان ها{' '}
            </div>
          </li>
          <li className="flex-1 mr-2">
            <div
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
              onClick={(e) => {
                // e.preventDefault();
                handleClick('BuildingUnit');
              }}
            >
              واحدهای ساختمان{' '}
            </div>
          </li>

          <li className="flex-1 mr-2">
            <div
              className="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4 cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleClick('Warehouse');
              }}
            >
              انباری ها{' '}
            </div>
          </li>
          <li className="flex-1 mr-2">
            <div
              className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                handleClick('Parking');
              }}
            >
              پارکینگ ها
            </div>
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

        {renderedComponent}
      </div>
    </>
  );
};

export default Menu;
