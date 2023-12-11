import { useSelector } from 'react-redux';
import {
  getVisibleFavorite,
  selectIsLoading,
} from '../../redux/CarsRent/select';
import Loader from 'components/Loader/Loader';
import { ContainerList } from 'components/CatalogList/CatalogList.styled';
import CatalogItem from 'components/CatalogItem/CatalogItem';

export default function FavoriteList() {
  const isLoading = useSelector(selectIsLoading);
  const favoritesList = useSelector(getVisibleFavorite);
  // console.log(favoritesList)

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ContainerList>
            {favoritesList?.map(list => {
              return <CatalogItem key={list.id} list={list} />;
            })}
          </ContainerList>
          {/* <Pagination/> */}
        </>
      )}
    </>
  );
}
