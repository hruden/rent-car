import { Card, DividerContainer, Item, List } from "./CatalogItem.styled";

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
    id,
  } = list;
  return (
          <Card key={id}>
            <img src={img} alt="car" width={274} height={268} loading="lazy" />
            <List>
              <DividerContainer>
                <li>{make}</li>
                <Item>{year}</Item>
                <li>{rentalPrice}</li>
              </DividerContainer>
              <div>
                <div>
                  <li>{address.split(',').slice(-2)}</li>
                  <li>{rentalCompany}</li>
                </div>
                <div>
                  <li>{type}</li>
                  <li>{model}</li>
                  <li>{mileage}</li>
                  <li>{functionalities[0]}</li>
                </div>
              </div>
            </List>
            <button type="button">Learn More</button>
          </Card>
  );
}
