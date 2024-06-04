import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../Company.d';
import { getTenK } from '../../Api';
import Spinner from '../Spinner/Spinner';
import TenKFinderItem from './TenkKFinderItem/TenkKFinderItem';

type Props = {
    ticker: string;
}

const TenKFinder = ({ticker}: Props) => {

    const [companyData, setCompanyData] = useState<CompanyTenK[]>();
    useEffect(() => {
      const getTenKData = async () => {
        try{
            const value = await getTenK(ticker);
            if(typeof value === "string"){
                console.log("Error when uploading company information", value);
            }
            else{
                setCompanyData(value.data);
            }
        } catch (error) {
            console.log("Error when uploading company information", error);
        }
      };
      getTenKData();
    }, [ticker]);

  return (
    <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData ? (
        companyData?.slice(0, 4).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
  )
}

export default TenKFinder