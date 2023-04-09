const actionList = ({ actionCommand }) => {
  return (
    <ul className="list">
      {actionCommand.map((doneCommand, index) => (
        <li key={index}>{doneCommand}</li>
      ))}
    </ul>
  );
};

export default actionList;
