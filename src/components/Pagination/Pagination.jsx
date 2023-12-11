import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectPage } from '../../redux/select';
import { currentPage } from '../../redux/slice';

export default function Pagination() {
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const page = useSelector(selectPage);

  const handleNextPage = () => {
    dispatch(currentPage(page + 1));
  };
  return (
    <div>
      {rentCars.length % 12 === 0 ? (
        <button type="button" onClick={handleNextPage}>
          Next page
        </button>
      ) : (
        <p>No more pages available</p>
      )}
    </div>
  );
}
