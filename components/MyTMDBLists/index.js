
import BackdropsGridContainer from 'components/BackdropsGridContainer';
import MyTMDBList from './MyTMDBList';
import Pagination from 'components/Pagination';

const MyTMDBLists = ({
  myLists,
  baseUrl
}) => (
  <>
    <BackdropsGridContainer>
      {myLists.results.map(myList => (
        <MyTMDBList
          key={myList.id}
          myList={myList}
          baseUrl={baseUrl} />
      ))}
    </BackdropsGridContainer>
    <Pagination
      page={myLists.page}
      totalPages={myLists.total_pages} />
  </>
);

export default MyTMDBLists;
