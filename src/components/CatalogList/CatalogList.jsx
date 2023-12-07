export default function CatalogList({ list }) {
  return (<>
      {list?.map(({make,model,year,img,rentalPrice,address,rentalCompany,type,mileage,functionalities,id})=>(
        <div key={id}>
        <img src={img} alt="car" width={274} height={268}/>
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
      </div>  
    ))
}
</>
  );
}
