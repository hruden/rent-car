// import ModalCarInfo from 'components/ModalCarInfo/ModalCarInfo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectIsLoading, selectPage } from '../../redux/select';
import { getFetchCars } from '../../redux/operation';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import { ContainerList } from './CatalogList.styled';
import Loader from 'components/Loader/Loader';

export default function CatalogList() {
  // const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const page = useSelector(selectPage);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(getFetchCars(page));
  }, [dispatch, page]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <ContainerList>
          {rentCars.map(list => {
            return <CatalogItem key={list.id} list={list} />;
          })}
        </ContainerList>
      )}
    </>
  );
}
