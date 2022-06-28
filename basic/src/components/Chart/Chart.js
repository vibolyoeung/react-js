import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = props => {
    let expendArrayValue = props.chartDatas.map(expense => expense.value);
    const maxTotal = Math.max(...expendArrayValue);
    return <div className="chart">
        {props.chartDatas.map(chartData => {
            return <ChartBar value={chartData.value} label={chartData.label} max={maxTotal} key={chartData.label} />
        })}
    </div>
};

export default Chart;