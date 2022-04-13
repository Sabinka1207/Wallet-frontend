import Loader from '../Loader/Loader';
import SelectOption from './SelectOption';

function ModalSelectBackground({ income, categories }) {
  const incomeCategories = categories.filter(
    category => category.type === 'income',
  );
  const spendingCategories = categories.filter(
    category => category.type === 'spending',
  );

  return (
    <div id="select-box" className="FakeSelect">
      <div className="FakeSelect__backdrop">
        {' '}
        <input type="checkbox" id="options-view-button" />
        <div id="select-button" className="brd">
          <div id="selected-value">
            <span>Выберите категорию</span>
          </div>
          {/* <div id="chevrons">
          <i className="fas fa-chevron-up"></i>
          <i className="fas fa-chevron-down"></i>
        </div> */}
        </div>
        <div id="options">
          {income
            ? incomeCategories.map(({ _id, nameDropdown }) => (
                <SelectOption key={_id} value={_id} name={nameDropdown} />
              ))
            : spendingCategories.map(({ _id, nameDropdown }) => (
                <SelectOption key={_id} value={_id} name={nameDropdown} />
              ))}

          <div id="option-bg"></div>
        </div>
      </div>
    </div>
  );
}

export default ModalSelectBackground;
