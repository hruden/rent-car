import Divider from 'components/Divider/Divider';
import { BlueText, CallUs, Container, ContainerImg, Img, ListContainer, RentConditions, RentItem, TextContainer, Title, TitleAccessories, TitleContainerText } from './ModalCarInfo.styled';
import Fallback from '../../assets/images/fallback.jpg';

export default function ModalCarInfo({ carInfo }) {
  if (
    !carInfo ||
    !carInfo.address ||
    !carInfo.accessories ||
    !carInfo.functionalities ||
    !carInfo.rentalConditions ||
    !carInfo.mileage
  ) {
    return;
  }
  const addressArr = carInfo.address.split(',').slice(-2);
  const rentConditions = carInfo.rentalConditions.split('\n');
  const age = rentConditions[0].split(' ');
  const minAge = age[1].split(':');
  const newMileage = carInfo.mileage
    .toString()
    .split('')
    .map((el, i) => (i === 0 ? `${el},` : el))
    .join('');

  return (
    <>
      <Container>
        <ContainerImg>
          <Img src={carInfo.img?carInfo: Fallback} alt="car" loading="lazy"/>
        </ContainerImg>
        <ListContainer>
          <Title>
            {carInfo.make} <BlueText>{carInfo.model}</BlueText>, {carInfo.year}
          </Title>
          <TextContainer>
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
          </TextContainer>
          <TitleContainerText>{carInfo.description}</TitleContainerText>
        </ListContainer>
        <ListContainer>
          <TitleAccessories>Accessories and functionalities:</TitleAccessories>
          <TextContainer>
          <li>
            {carInfo.accessories[0]} <Divider /> {carInfo.accessories[1]}{' '}
            <Divider /> {carInfo.functionalities[0]}
          </li>
          <li>
            {carInfo.accessories[2]} <Divider /> 
            {carInfo.functionalities[1]} <Divider />{' '}
            {carInfo.functionalities[2]}
          </li>
          </TextContainer>
        </ListContainer>
        <ListContainer>
          <TitleAccessories>Rental Conditions: </TitleAccessories>
          <RentConditions>
            <RentItem>
              {age[0]} {minAge} <BlueText>{age[2]}</BlueText>{' '}
            </RentItem>
            <RentItem>{rentConditions[1]}</RentItem>
          </RentConditions>
          <RentConditions>
            <RentItem>{rentConditions[2]}</RentItem>
            <RentItem>
              Mileage: <BlueText>{newMileage}</BlueText>
            </RentItem>
            <RentItem>
              Price: <BlueText>{carInfo.rentalPrice}</BlueText>
            </RentItem>
          </RentConditions>
        </ListContainer>
        <CallUs href="tel:+380730000000">Rental car</CallUs>
      </Container>
    </>
  );
}
