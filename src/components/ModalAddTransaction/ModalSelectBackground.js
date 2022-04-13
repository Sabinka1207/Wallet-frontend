function ModalSelectBackground({ array }) {
  return (
    <div className="ModalSelectBackground">
      <span className="ModalSelectBackground__placeholder">
        Выберите категорию
      </span>
      <div className="ModalSelectBackground__list">
        {array.length > 0 &&
          array.map(({ _id, nameDropdown }) => (
            <span className="Select__option" key={_id} value={_id}>
              {nameDropdown}
            </span>
          ))}
      </div>
    </div>
  );
}

export default ModalSelectBackground;
