import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FeaturedList from '../../components/featured/featured-list';
import {fetchFeaturedStartAsync} from '../../store/featured/featured.action'

const Home = () => { 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeaturedStartAsync());
  }, [dispatch])

  return (
    <>
       <FeaturedList />
    </>
     
  );
}

export default Home
