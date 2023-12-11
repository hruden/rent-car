import ModalCarInfo from 'components/ModalCarInfo/ModalCarInfo';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCars,
  selectIsLoading,
} from '../../redux/CarsRent/select';
import { getFetchCars } from '../../redux/CarsRent/operation';
import CatalogItem from 'components/CatalogItem/CatalogItem';
import { ContainerList } from './CatalogList.styled';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/Pagination/Pagination';
import Modal from 'components/ModalCarInfo/Modal/Modal';

export default function CatalogList() {
  const [modalActive, setModalActive] = useState(false);
  const [moreInfo, setMoreInfo] = useState([]);
  const [page, setPage] = useState(1)
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (rentCars.length === 0) {
      dispatch(getFetchCars(page));
    }
  }, [dispatch, page, rentCars]);

  const openModal = data => {
    setModalActive(true);
    setMoreInfo(data);
  };
  const handleNextPage = () => {
    setPage(prev => prev + 1);
    dispatch(getFetchCars(page+1))
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContainerList>
            {rentCars?.map(list => {
              return (
                <CatalogItem
                  key={list.id}
                  list={list}
                  activeModal={openModal}
                />
              );
            })}
          </ContainerList>
          <Pagination loadMore={handleNextPage}/>
        </>
      )}
      <Modal active={modalActive} setActive={setModalActive}>
        <ModalCarInfo carInfo={moreInfo} />
      </Modal>
    </>
  );
}
