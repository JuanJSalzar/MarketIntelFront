import React from "react";

type Props = {
  config: any;
  data: any;
};

const Table = ({ config, data }: Props) => {
  const renderedRow = data.map((company: any) => {
    return (
      <tr key={company.cik}>
        {config.map((val: any) => {
          return <td className="p-3">{val.render(company)}</td>;
        })}
      </tr>
    );
  });
  const renderedHeaders = config.map((config: any) => {
    return (
      <th
        key={config.label}
        className="pl-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
      >
        {config.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 m-4 overflow-x-auto">
      <table className="w-full sm:max-w-full md:max-w-4xl lg:max-w-6xl xl:max-w-full divide-y divide-gray-300">
        <thead className="bg-gray-100">{renderedHeaders}</thead>
        <tbody>{renderedRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
