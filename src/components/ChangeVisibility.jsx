const ChangeVisibility = ({ visibility, changeVisibility }) => {
  const handleChange = (event) => {
    changeVisibility(event.target.value);
  };
  return (
    <div>
      <input
        type="radio"
        name="visibility"
        value="all"
        onChange={handleChange}
        checked={visibility === "all"}
      />
      ALL
      <input
        type="radio"
        name="visibility"
        value="completed"
        onChange={handleChange}
        checked={visibility === "completed"}
      />
      COMPLETED
      <input
        type="radio"
        name="visibility"
        value="running"
        onChange={handleChange}
        checked={visibility === "running"}
      />
      RUNNING
    </div>
  );
};

export default ChangeVisibility;
