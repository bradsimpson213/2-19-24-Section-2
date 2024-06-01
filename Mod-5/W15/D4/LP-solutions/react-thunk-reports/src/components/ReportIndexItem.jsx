import { Link } from 'react-router-dom';
//!!START SILENT
import { useDispatch } from 'react-redux';
import { deleteReport } from '../store/reports';
//!!END

const ReportIndexItem = ({ report }) => {
  //!!ADD
  // const handleDelete = (e) => {
    // e.preventDefault();
  // };
  //!!END_ADD
  //!!START SILENT
  const dispatch = useDispatch();
  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteReport(report.id));
  };
  //!!END

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <li>
      <div className="li-contents-flex">
        <Link to={`/reports/${report.id}`}>Report #{report.id}</Link>
        <div className="buttons-container">
          <Link
            className="edit-link"
            to={`/reports/${report.id}/edit`}
          >
            Edit
          </Link>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default ReportIndexItem;
