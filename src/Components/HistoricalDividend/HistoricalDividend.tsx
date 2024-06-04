import React, { useEffect, useState } from "react";
import { Dividend } from "../../Company.d";
import { getHistoricalDividend } from "../../Api";
import { useOutletContext } from "react-router-dom";
import SimpleLineChart from "../SimpleLineChart/SimpleLineChart";

type Props = {};

const HistoricalDividend = (props: Props) => {
  const ticker = useOutletContext<string>();
  const [dividend, setDividend] = useState<Dividend[]>();
  useState<boolean>(false);

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        const result = await getHistoricalDividend(ticker);
  
        if (typeof result === "string") {
          console.error("Error fetching income statement data:", result);
        } else {
          setDividend(
            result?.data.historical.slice(0, 18).sort(function (a, b) {
              var c = new Date(a.date);
              var d = new Date(b.date);
              return c.getTime() - d.getTime();
            })
          );
        }
      } catch (error) {
        console.error("Error fetching income statement data:", error);
      }
    };
    getCompanyData();
  }, [ticker]);
  
  
  return(
    <>
      {dividend && dividend.length > 0 && dividend !== undefined ? (
        <SimpleLineChart data={dividend} xAxis="label" dataKey="dividend" />
      ) : (
        <h1 className="ml-3">Company does not have a dividend!</h1>
      )}
    </>
  );
};

export default HistoricalDividend;
