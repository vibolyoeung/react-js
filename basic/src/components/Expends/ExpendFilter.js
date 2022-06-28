import "./ExpendFilter.css";

const ExpendFilter = (props) => {
    const changeSelectHandler = (event) => {
        props.onSelectionChange(event.target.value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter By Year</label>
                <select value={props.selected} onChange={changeSelectHandler}>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                </select>
            </div>
        </div>
    );
};

export default ExpendFilter;
