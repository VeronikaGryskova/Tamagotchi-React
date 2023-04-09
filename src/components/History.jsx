import { Link } from "react-router-dom";
import ActionList from "./ActionList";
import { useSelector } from "react-redux";

const History = ({}) => {
  const actionCatalog = useSelector((state) => state.actionCatalog);
  return (
    <div className="listHistory">
      <ActionList actionCommand={actionCatalog}></ActionList>
      <Link to="/">Назад</Link>
    </div>
  );
};

export default History;
