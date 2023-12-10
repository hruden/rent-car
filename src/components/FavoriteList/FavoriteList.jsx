import { useSelector } from "react-redux";
import { selectFavorites, selectIsLoading } from "../../redux/select";
import Loader from "components/Loader/Loader";
import { ContainerList } from "components/CatalogList/CatalogList.styled";
// import CatalogItem from "components/CatalogItem/CatalogItem";

export default function FavoriteList() {
    const isLoading = useSelector(selectIsLoading);
    const favorites = useSelector(selectFavorites);
    console.log(favorites)

    return (
        <>{isLoading ? (
            <Loader />
          ) : (
            <>
              <ContainerList>
                {/* {favorites?.map(list => {
                  return <CatalogItem key={list.id} list={list}/>;
                })} */}
              </ContainerList>
              {/* <Pagination/> */}
            </>
          )}</>
    )
}