import ModalCarInfo from 'components/ModalCarInfo/ModalCarInfo';
import { useState } from 'react';

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
            <div key={id}>
              <img src={img} alt="car" width={274} height={268} />
              <ul>
                <div>
                  <li>{make}</li>
                  <li>{year}</li>
                  <li>{rentalPrice}</li>
                </div>
                <div>
                  <div>
                    <li>{address}</li>
                    <li>{rentalCompany}</li>
                  </div>
                  <div>
                    <li>{type}</li>
                    <li>{model}</li>
                    <li>{mileage}</li>
                    <li>{functionalities[0]}</li>
                  </div>
                </div>
              </ul>
              <button type="button" onClick={() => setModalActive(true)}>
                Learn More
              </button>
              <ModalCarInfo active={modalActive} setActive={setModalActive} carId={id}/>
            </div>
        )
      )}
    </>
  );
}
