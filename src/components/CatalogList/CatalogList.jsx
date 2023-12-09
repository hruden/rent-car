// import ModalCarInfo from 'components/ModalCarInfo/ModalCarInfo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectPage } from '../../redux/select';
import { getFetchCars } from '../../redux/operation';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import { ContainerList } from './CatalogList.styled';

export default function CatalogList() {
  // const [modalActive, setModalActive] = useState(false);
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const page = useSelector(selectPage);

  useEffect(() => {
    dispatch(getFetchCars(page));
  }, [dispatch, page]);

  return (
    <ContainerList>
      {rentCars.map(list => {
        return <CatalogItem key={list.id} list={list} />;
      })}
    </ContainerList>
  );
}
