import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

type Props = {
  data: any;
  xAxis: string;
  dataKey: string;
};

const SimpleLineChart = ({ data, xAxis, dataKey }: Props) => {
  return (
    <>
      <ResponsiveContainer width={"99%"} height={500}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="blue"
            activeDot={{ r: 8 }}
          />
          <XAxis dataKey={xAxis} />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SimpleLineChart;