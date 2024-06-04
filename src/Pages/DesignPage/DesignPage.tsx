import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { testIncomeStatementData } from "../../Components/Table/testData";

type Props = {};

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Market Capitalization (Trailing Twelve Months)"
  }
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1 className="ml-4">Market IntelTrack Design Page</h1>
      <h2 className="ml-4">This is a design page. Where we will house various designs</h2>
      <RatioList data={testIncomeStatementData} config={tableConfig}/>
      <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  );
};

export default DesignPage;
