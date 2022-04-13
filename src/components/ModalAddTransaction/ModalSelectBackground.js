import Loader from '../Loader/Loader';
import SelectOption from './SelectOption';

function ModalSelectBackground({ income, categories, setCategory }) {
  const incomeCategories = categories.filter(
    category => category.type === 'income',
  );
  const spendingCategories = categories.filter(
    category => category.type === 'spending',
  );

  return (
    <>
      {' '}
      <div id="select-box" className="FakeSelect">
        <input type="checkbox" id="options-view-button" />
        <div id="select-button" className="brd">
          <div id="selected-value">
            <span className="selected-span">Выберите категорию</span>
          </div>
        </div>
        <div id="options">
          <div className="FakeSelect__backdrop"></div>{' '}
          {income
            ? incomeCategories.map(({ _id, nameDropdown }) => (
                <SelectOption
                  key={_id}
                  value={_id}
                  name={nameDropdown}
                  addClass="income"
                  setCategory={setCategory}
                />
              ))
            : spendingCategories.map(({ _id, nameDropdown }) => (
                <SelectOption
                  key={_id}
                  value={_id}
                  name={nameDropdown}
                  addClass="spending"
                  setCategory={setCategory}
                />
              ))}
          {/* <div id="option-bg"></div> */}
        </div>
      </div>
    </>
  );
}

export default ModalSelectBackground;
