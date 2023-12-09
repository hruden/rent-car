import Divider from "Divider/Divider";
import { Card, TitleContainer, Item, List, TextContainer, Img, BtnLearnMore } from "./CatalogItem.styled";

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
            <Img src={img} alt="car" width={280} height={268} loading="lazy" />
            <List>
              <TitleContainer>
                <li>{make}, {year}</li>
                <li>{rentalPrice}</li>
              </TitleContainer>
                <TextContainer>
                  <li>{address.split(',').slice(-2)} <Divider/> {rentalCompany}</li>
                  <Item>{type} <Divider/> {model} <Divider/> {mileage} <Divider/> {functionalities[0]}</Item>
                </TextContainer>
            </List>
            <BtnLearnMore type="button">Learn More</BtnLearnMore>
          </Card>
  );
}
