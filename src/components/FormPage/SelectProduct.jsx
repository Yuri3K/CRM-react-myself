import { useContext } from "react";
import { AppContext } from "../../App";

const SelectProduct = ({ onChange }) => {

  const { cources } = useContext(AppContext)

  const selectOptions = cources.map(cource => {

    return (
      <option value={cource.id} key={cource.id}>{cource.title}</option>
    )
  })

  return (
    <div className="form-group">
      <label htmlFor="exampleFormControlSelect1">Продукт:</label>
      <select onChange={onChange} data-id="product" name="product" className="form-control" id="exampleFormControlSelect1">
        {selectOptions}
      </select>
    </div>
  );
}

export default SelectProduct;