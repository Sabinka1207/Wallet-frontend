function SelectOption({ value, name, addClass, setCategory }) {
  return (
    <div className={`option ${addClass}`}>
      <input
        className="s-c top"
        type="radio"
        name="category"
        value={value}
        onClick={() => setCategory(value)}
      />
      <input
        className="s-c bottom"
        type="radio"
        name="category"
        value={value}
      />
      <span className="label">{name}</span>
      <span className="opt-val">{name}</span>
    </div>
  );
}

export default SelectOption;
