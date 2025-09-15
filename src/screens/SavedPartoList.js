import PartoPlacesList from '../components/PartoPlacesList';

const SavedPartoList = ({ route }) => {
  const place = route.params;

  return <PartoPlacesList screen={'SavedScreen'} />;
};

export default SavedPartoList;
