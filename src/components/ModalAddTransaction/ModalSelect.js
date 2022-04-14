import ModalSelectOption from './ModalSelectOption';

function ModalSelect({ income, categories, setCategory }) {
  const incomeCategories = categories.filter(
    category => category.type === 'income',
  );
  const spendingCategories = categories.filter(
    category => category.type === 'spending',
  );

  return (
    <>
      <div id="select-box" className="ModalSelect">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button">
          <div id="selected-value">
            <span>Выберите категорию</span>
          </div>
        </div>
        <div id="options">
          {income
            ? incomeCategories.map(({ _id, nameDropdown }) => (
                <ModalSelectOption
                  key={_id}
                  value={_id}
                  name={nameDropdown}
                  addClass="income"
                  setCategory={setCategory}
                />
              ))
            : spendingCategories.map(({ _id, nameDropdown }) => (
                <ModalSelectOption
                  key={_id}
                  value={_id}
                  name={nameDropdown}
                  addClass="spending"
                  setCategory={setCategory}
                />
              ))}
        </div>
      </div>
    </>
  );
}

export default ModalSelect;
