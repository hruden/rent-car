import Divider from 'components/Divider/Divider';

export default function ModalCarInfo({ carInfo }) {
  if (
    !carInfo ||
    !carInfo.address ||
    !carInfo.accessories ||
    !carInfo.functionalities ||
    !carInfo.rentalConditions||
    !carInfo.mileage
  ) {
    return;
  }
  const addressArr = carInfo.address.split(',').slice(-2);
  const rentConditions = carInfo.rentalConditions.split('\n');
  const age = rentConditions[0].split(' ')
  const minAge = age[1].split(':')
  const newMileage = carInfo.mileage
  .toString()
  .split("")
  .map((el, i) => (i === 0 ? `${el},` : el))
  .join("");

  console.log(addressArr);

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
              {addressArr[0]} <Divider /> {addressArr[1]} <Divider /> Id:
              {carInfo.id} <Divider />
              Year:{carInfo.year} <Divider /> Type: {carInfo.type}
            </li>
            <li>
              Fuel Consumption: {carInfo.fuelConsumption} <Divider /> Engine
              Size:
              {carInfo.engineSize}
            </li>
          </div>
          <p>{carInfo.description}</p>
        </ul>
        <ul>
          <p>Accessories and functionalities:</p>
          <li>
            {carInfo.accessories[0]} <Divider /> {carInfo.accessories[1]}{' '}
            <Divider /> {carInfo.functionalities[0]}
          </li>
          <li>
            {carInfo.accessories[2]} <Divider /> <Divider />{' '}
            {carInfo.functionalities[1]} <Divider />{' '}
            {carInfo.functionalities[2]}
          </li>
        </ul>
        <ul>
          <p>Rental Conditions: </p>
          <div>
            <li>{age[0]} {minAge} <span>{age[2]}</span> </li>
            <li>{rentConditions[1]}</li>
          </div>
          <div>
            <li>{rentConditions[2]}</li>
            <li>Mileage: <span>{newMileage}</span></li>
            <li>Price: <span>{carInfo.rentalPrice}</span></li>
          </div>
        </ul>
      </div>
    </>
  );
}
