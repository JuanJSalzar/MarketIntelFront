import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCompanyProfile } from "../../Api";
import { CompanyProfile } from "../../Company.d";
import Sidebar from "../../Components/Sidebar/Sidebar";
import CompanyDashboard from "../../Components/CompanyDashboard/CompanyDashboard";
import Tile from "../../Components/Tile/Tile";
import Spinner from "../../Components/Spinner/Spinner";
import TenKFinder from "../../Components/TenKFinder/TenKFinder";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProfileInit = async () => {
      try {
        const result = await getCompanyProfile(ticker!);
        if (typeof result === "string") {
          setError(result); // En caso de error, el resultado es un string de mensaje de error
        } else {
          setCompany(result.data[0]);
        }
      } catch (error) {
        setError("Error when uploading company information"); // Manejo genérico de errores
      } finally {
        setLoading(false);
      }
    };
    getProfileInit();
  }, [ticker]);

  return (
    <>
      {company ? (
        <div className="w-full relative flex flex-wrap ct-docs-disable-sidebar-content overflow-x-hidden">
          <Sidebar />
          <CompanyDashboard ticker={ticker!}>
            <Tile title="Company Name" value={company.companyName} />
            <Tile title="Sector" value={company.sector} />
            <Tile title="Price" value={"$" + company.price.toString()} />
            <Tile title="DCF" value={"$" + company.dcf.toString()} />
            <TenKFinder ticker={company.symbol} />
            {/* <p className="bg-white shadow rounded text-medium font-medium text-gray-900 p-4 mt-5 m-4">
              {company.description}
            </p> */}
          </CompanyDashboard>
        </div>
      )  : (<Spinner />)}
    </>
  );
};

export default CompanyPage;
