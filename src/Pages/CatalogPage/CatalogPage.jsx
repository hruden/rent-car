import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchCars } from '../../redux/operation';
import { selectCars, selectPage } from '../../redux/select';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getFetchCars(page));
  }, [dispatch, page]);

  console.log(rentCars);

  return <div>CatalogPage</div>;
}
