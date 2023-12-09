import Divider from 'Divider/Divider';
import {
  Card,
  TitleContainer,
  Item,
  List,
  TextContainer,
  Img,
  BtnLearnMore,
  ContainerImg,
} from './CatalogItem.styled';

export default function CatalogItem({ list }) {
  const {
    make,
    model,
    year,
    img,
    rentalPrice,
    address,
    rentalCompany,
    type,
    mileage,
    functionalities,
    // id,
  } = list;
  return (
    <Card>
      <ContainerImg>
        <Img src={img} alt="car" loading="lazy" />
      </ContainerImg>
      <List>
        <TitleContainer>
          <li>
            {make}, {year}
          </li>
          <li>{rentalPrice}</li>
        </TitleContainer>
        <TextContainer>
          <Item>
            {address.split(',').slice(-2)} <Divider /> {rentalCompany}
          </Item>
          <Item>
            {type} <Divider /> {model} <Divider /> {mileage} <Divider />{' '}
            {functionalities[0]}
          </Item>
        </TextContainer>
      </List>
      <BtnLearnMore type="button">Learn More</BtnLearnMore>
    </Card>
  );
}
