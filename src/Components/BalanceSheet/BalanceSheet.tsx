import React, { useEffect, useState } from "react";
import { CompanyBalanceSheet } from "../../Company.d";
import { getBalanceSheet } from "../../Api";
import { useOutletContext } from "react-router-dom";
import RatioList from "../RatioList/RatioList";
import Spinner from "../Spinner/Spinner";

type Props = {};

const config = [
  {
    label: "Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Inventory",
    render: (company: CompanyBalanceSheet) => company.inventory,
  },
  {
    label: "Other Current Assets",
    render: (company: CompanyBalanceSheet) => company.otherCurrentAssets,
  },
  {
    label: "Minority Interest",
    render: (company: CompanyBalanceSheet) => company.minorityInterest,
  },
  {
    label: "Other Non-Current Assets",
    render: (company: CompanyBalanceSheet) => company.otherNonCurrentAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
];

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [BalanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();
  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const result = await getBalanceSheet(ticker);
        if (typeof result === "string") {
          console.error("Error fetching income statement data:", result);
        } else {
          setBalanceSheet(result?.data[0]);
        }
      } catch (error) {
        console.error("Error fetching income statement data:", error);
      }
    };

    getCompanyData();
  }, [ticker]);
  return <>
    {BalanceSheet ? (<RatioList config={config} data={BalanceSheet}></RatioList>) : (<Spinner />)}
  </>;
};

export default BalanceSheet;
