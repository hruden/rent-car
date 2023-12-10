import Divider from 'components/Divider/Divider';

export default function ModalCarInfo({ carInfo }) {
  // const {
  //   id,
  //   year,
  //   make,
  //   model,
  //   type,
  //   img,
  //   description,
  //   fuelConsumption,
  //   engineSize,
  //   accessories,
  //   functionalities,
  //   rentalPrice,
  //   rentalCompany,
  //   // address,
  //   mileage,
  // } = carInfo;
  // const rentConditions = carInfo?.rentalConditions.split('\n');

  console.log(carInfo);

  return (
    <>
      <div>
        <img src={carInfo.img} alt="car" width={274} height={268} />
        <ul>
          <li>
            {carInfo.make} <span>{carInfo.model}</span>, {carInfo.year}
          </li>
          <div>
            <li>
            {/* {carInfo.address.split(',').slice(-2)} <Divider /> Id:{carInfo.id} <Divider /> */}
              {/* {carInfo.address[0]} <Divider /> {carInfo.address[1]} <Divider /> Id:{carInfo.id} <Divider /> */}
              Year:{carInfo.year} <Divider /> Type: {carInfo.type}
            </li>
            <li>
              Fuel Consumption: {carInfo.fuelConsumption} <Divider /> Engine Size:
              {carInfo.engineSize}
            </li>
          </div>
          <p>{carInfo.description}</p>
        </ul>
        <ul>
          <p>Accessories and functionalities:</p>
          {/* <li>{accessories[0]} <Divider/> {accessories[1]} <Divider/> {functionalities[0]}</li>
          <li>{accessories[2]} <Divider/> <Divider/> {functionalities[1]} <Divider/> {functionalities[2]}</li> */}
        </ul>
        <ul>
          <p>Rental Conditions: </p>
          <li>{carInfo.type}</li>
          <li>{carInfo.model}</li>
          <li>{carInfo.mileage}</li>
          {/* <li>{rentConditions}</li> */}
        </ul>
      </div>
    </>
  );
}
