const ManagementControl = ({ designation, color, onClick }) => {
  return (
    <button className={`managementControl ${color}`} onClick={onClick}>
      {designation}
    </button>
  );
};

export default ManagementControl;
