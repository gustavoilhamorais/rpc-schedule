import React from 'react';
import Axios from 'axios';
import { Provider } from './containers/GlobalContext';
import Routes from './Routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/shards-dashboards.1.1.0.min.css';

function App() {
  const [schedule, setSchedule] = React.useState(() => []);
  const [error, setError] = React.useState(() => "");
  const [isLoading, setIsLoading] = React.useState(() => true);
  const [isCardOpen, setIsCardOpen] = React.useState(() => { });
  const [programsCategories, setProgramsCategories] = React.useState(() => []);
  const [selectedCategory, setSelectedCategory] = React.useState(() => []);
  const [currentDate, setCurrentDate] = React.useState(() => new Date());
  const todaysDate = new Date().toISOString().split("T")[0];
  function updateFilters({ target: { value } }) {
    setSelectedCategory(() => value);
  }
  return (
    <Provider value={{
      schedule,
      error,
      isLoading,
      isCardOpen,
      setIsCardOpen,
      programsCategories,
      updateFilters,
      selectedCategory,
      fetchScheduleGrid,
      currentDate,
      setCurrentDate
    }}>
      <Routes />
    </Provider>
  );
}

export default App;
