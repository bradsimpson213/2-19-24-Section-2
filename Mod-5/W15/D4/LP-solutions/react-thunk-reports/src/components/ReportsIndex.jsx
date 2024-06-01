import { Link } from 'react-router-dom';
//!!START SILENT
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReports } from '../store/reports';
//!!END
import ReportIndexItem from './ReportIndexItem';
import { resetDatabase } from '../mocks/storage';

const ReportsIndex = () => {
  //!!ADD
  // const reports = []; // populate from Redux store
  //!!END_ADD
  //!!START SILENT
  const reports = Object.values(
    useSelector((state) => (state.reports ? state.reports : []))
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);
  //!!END

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <ul>
        {reports.map((report) => (
          <ReportIndexItem
            report={report}
            key={report.id}
          />
        ))}
      </ul>
      <Link
        className="back-button new"
        to="/reports/new"
      >
        New Report
      </Link>
      <button onClick={resetDatabase}>Reset the Database</button>
    </section>
  );
};

export default ReportsIndex;
