const InputCommand = ({ clue, id, onChange }) => {
  return (
    <textarea
      className="inputCommand"
      placeholder={clue}
      onChange={onChange}
    ></textarea>
  );
};

export default InputCommand;
