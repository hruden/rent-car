import Modal from './Modal/Modal';
import { useEffect, useState } from 'react';
import { getFetchOneCar } from '../../redux/operation';

export default function ModalCarInfo({ active, setActive, carId}) {

    const [car,setCar] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    // const oneCar = () => {
    //     carsList?.filter(({id})=> id === carId)
    // }
    // setCar(oneCar())
    // console.log(carId)
//   const {
//     img,
//     make,
//     year,
//     rentalPrice,
//     address,
//     rentalCompany,
//     type,
//     model,
//     mileage,
//     functionalities,
//   } = car;
// const getData = async () => {
//     try {
//       setIsLoading(true);

//       const data =  await getFetchOneCar(carId);
//       setCar(data);
//     } catch (error) {
//       console.log('error :>> ', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };
//   getData()
// useEffect(() => {
// getData()
// }, []);
  useEffect(() => {
    if(carId.length<0 && !carId ){return}

      const getData = async () => {
    try {
      setIsLoading(true);

      const data =  await getFetchOneCar(carId);
      setCar(...data);
    } catch (error) {
      console.log('error :>> ', error);
    } finally {
      setIsLoading(false);
    }
  };
  getData()
  }, [carId]);
// useEffect(() => {
//     const getData = async()=>{
//         try{
//             getFetchOneCar(carId).then(res=>setCar(...res))
//             // setCar(res)
//             console.log()    
//         } catch (error) {
//             console.log('error :>> ', error);
//     }
// }
// getData()
// }, [carId]);

//   useEffect(() => {
//     const carDetails = async () => {
//         try {const data=
//             await getFetchOneCar({
//               carId,
//             });
//     setCar({data})    }
//      catch (error) {
//           console.log(error);
//         }
//       };
//     carDetails();
//   }, [carId]);
  console.log(car)


  return (
    <>
    {isLoading && <div>...Loading</div>}
      <Modal active={active} setActive={setActive}>
        <div>{car.id}</div>
        {/* <div>
        <img src={car.img} alt="car" width={274} height={268} />
        <ul>
          <div>
            <li>{car.make}</li>
            <li>{car.year}</li>
            <li>{car.rentalPrice}</li>
          </div>
          <div>
            <div>
              <li>{car.address}</li>
              <li>{car.rentalCompany}</li>
            </div>
            <div>
              <li>{car.type}</li>
              <li>{car.model}</li>
              <li>{car.mileage}</li>
              <li>{car.functionalities}</li>
            </div>
          </div>
        </ul>
        </div> */}
      </Modal>
      ;
    </>
  );
}
