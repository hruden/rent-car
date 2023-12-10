import { useDispatch, useSelector } from 'react-redux';
import { selectCars, selectPage } from '../../redux/select';
import { currentPage } from '../../redux/slice';

export default function Pagination() {
  const dispatch = useDispatch();
  const rentCars = useSelector(selectCars);
  const page = useSelector(selectPage);

//   const handleBackPage = () => {
//     const totalPage = page - 1;
//     dispatch(currentPage(totalPage));
//   };
  const handleNextPage = () => {
    const totalPage = page + 1;
    dispatch(currentPage(totalPage));
  };
  return (
    <div>
      {/* {page !==1   && (
        <button
          type="button"
          onClick={() => handleBackPage()}
        >
          Back page
        </button>
      )} */}
      {rentCars.length % 12 === 0 &&
      <button
        type="button"
        onClick={() => handleNextPage()}
      >
        Next page
      </button>}
    </div>
  );
}
