import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchCars } from "../../../redux/operation";
import { selectCars } from "../../../redux/select";

export default function CatalogPage(){
    const dispatch = useDispatch();
    const rentCars = useSelector(selectCars)

    useEffect(() => {
        dispatch(getFetchCars());
      }, [dispatch]);
      console.log(rentCars)

    return(
        <div>CatalogPage</div>
    )
}