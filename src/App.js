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
  const todaysDate = new Date().toISOString().split("T")[0];
  const [currentDate, setCurrentDate] = React.useState(() => todaysDate);

  async function fetchScheduleGrid(selectedDate = todaysDate) {
    const url = `${process.env.REACT_APP_BACKEND_API}/rpc/cronograma/${selectedDate}`
    setIsLoading(true);
    await Axios.get(url)
      .then(({ data: { data }, status }) => {
        if (status === 200 && data.length) {
          setSchedule(() => data.map(program => {
            let dictionary = [21, 22, 23];
            const getHours = string => {
              let number = Number(string.split(':')[0]);
              return number !== 0 && number >= 3
                ? number - 3
                : dictionary[number]
            };

            const getMinutes = string => string.split(':')[1];
            const convertedEndTime = program.human_end_time.split(":00+")[0];
            const convertedStartTime = program.human_start_time.split(":00+")[0];

            const endTimeGtmFixed = `${getHours(convertedEndTime)
              }:${getMinutes(convertedEndTime)}`;

            const startTimeGtmFixed = `${getHours(convertedStartTime)
              }:${getMinutes(convertedStartTime)}`;

            return {
              ...program,
              human_end_time: endTimeGtmFixed,
              human_start_time: startTimeGtmFixed
            }
          }));

          setProgramsCategories(() => {
            return [
              ...new Set(data.map(({ program }) => program.category))
            ];
          });
        } else {
          setError(() => `Nenhum dado encontrado para a data requisitada.`)
        }
      })
      .catch(_error => setError(_error))
      .finally(() => setIsLoading(false));
  }

  function updateFilters({ target: { value } }) {
    setSelectedCategory(() => value);
  }

  React.useEffect(() => {
    fetchScheduleGrid();
    return () => null;
  }, []);

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
