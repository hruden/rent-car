import ModalCarInfo from 'components/ModalCarInfo/ModalCarInfo';
import { useState } from 'react';
import { Card, DividerContainer, Item, List } from './CatalogList.styled';

export default function CatalogList({ list }) {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      {list?.map(
        ({
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
        }) => (
            <Card key={id}>
              <img src={img} alt="car" width={274} height={268} />
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
              <button type="button" onClick={() => setModalActive(true)}>
                Learn More
              </button>
              {/* <ModalCarInfo active={modalActive} setActive={setModalActive} carId={id}/> */}
            </Card>
        )
      )}
    </>
  );
}
