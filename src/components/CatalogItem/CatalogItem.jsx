import Divider from 'components/Divider/Divider';
import Fallback from '../../assets/images/fullback.jpg';
import {
  Card,
  TitleContainer,
  Item,
  List,
  TextContainer,
  BtnLearnMore,
  ContainerImg,
  FavoriteIcon,
  FavoriteIconCheck,
} from './CatalogItem.styled';
import { useDispatch, useSelector } from 'react-redux';
import { favoritesCars } from '../../redux/CarsRent/slice';
import { selectFavorites } from '../../redux/CarsRent/select';

export default function CatalogItem({ list, activeModal }) {
  const favorites = useSelector(selectFavorites);

  const dispatch = useDispatch();
  const {
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    mileage,
    functionalities,
    id,
  } = list;
  const isFavorite = favorites.includes(id);

  const addressArr = list.address.split(',').slice(-2);

  const handleFavorite = () => {
    dispatch(favoritesCars(id));
  };

  const handleOpenModal = () => {
    activeModal(list);
  };
  return (
    <Card>
      <ContainerImg>
        <img src={img ? img : Fallback} alt="car" loading="lazy" />
      </ContainerImg>
      {isFavorite ? (
        <FavoriteIconCheck onClick={handleFavorite} />
      ) : (
        <FavoriteIcon onClick={handleFavorite} />
      )}
      <List>
        <TitleContainer>
          <li>
            {make}, {year}
          </li>
          <li>{rentalPrice}</li>
        </TitleContainer>
        <TextContainer>
          <Item>
            {addressArr[0]} <Divider /> {addressArr[1]} <Divider />{' '}
            {rentalCompany}
          </Item>
          <Item>
            {type} <Divider /> {model} <Divider /> {mileage} <Divider />
            {functionalities[0]}
          </Item>
        </TextContainer>
      </List>
      <BtnLearnMore type="button" onClick={handleOpenModal}>
        Learn More
      </BtnLearnMore>
    </Card>
  );
}
