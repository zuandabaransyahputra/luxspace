import { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useScrollToTop = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [history.location.key]);
};

export default useScrollToTop;
