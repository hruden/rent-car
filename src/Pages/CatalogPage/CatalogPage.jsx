import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFetchCars } from '../../redux/operation';
import { selectCars, selectPage } from '../../redux/select';
import FormSearch from 'components/FormSearch/FormSearch';
import CatalogList from 'components/CatalogList/CatalogList';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getFetchCars(page));
  }, [dispatch, page]);

  return (
    <>
      <FormSearch/>
      <CatalogList list={rentCars}/>
    </>
  );
}
