function SelectOption({ value, name }) {
  return (
    <div className="option">
      <input className="s-c top" type="radio" name="category" value={value} />
      <input
        className="s-c bottom"
        type="radio"
        name="category"
        value={value}
      />
      <i className="fab"></i>
      <span className="label">{name}</span>
      <span className="opt-val">{name}</span>
    </div>
  );
}

export default SelectOption;
