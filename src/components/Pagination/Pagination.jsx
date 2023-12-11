import { useSelector } from 'react-redux';
import { selectCars} from '../../redux/CarsRent/select';
import { LoadMoreBtn } from './Pagination.styled';

export default function Pagination({loadMore}) {
  const rentCars = useSelector(selectCars);
  return (
    <div>
      {rentCars.length % 12 === 0 ? (
        <LoadMoreBtn type="button" onClick={loadMore}>
          Load More
        </LoadMoreBtn>
      ) : (
        <p>No more pages available</p>
      )}
    </div>
  );
}
