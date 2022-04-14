function ModalSelectOption({ value, name, addClass, setCategory }) {
  return (
    <div className={`ModalSelectOption ${addClass}`}>
      <input
        className="ModalSelectOption__s-c ModalSelectOption__top"
        type="radio"
        name="category"
        value={value}
        onClick={() => setCategory(value)}
      />
      <input
        className="ModalSelectOption__s-c ModalSelectOption__bottom"
        type="radio"
        name="category"
        value={value}
      />
      <span className="ModalSelectOption__label">{name}</span>
      <span className="ModalSelectOption__opt-val">{name}</span>
    </div>
  );
}

export default ModalSelectOption;
