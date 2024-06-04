import { Link } from "react-router-dom";
import { CompanySearch } from "../../Company.d";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import "./Card.css";

interface FinancialData {// This is the interface for the props that the Card component will receive
  id: string;
  searchResults: CompanySearch;
  onPortfolioCreate: (e: React.SyntheticEvent) => void;
}

const Card: React.FC<FinancialData> = ({
  id,
  searchResults,
  onPortfolioCreate
}: FinancialData): JSX.Element => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-gray-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResults.symbol}/company-profile`} className="font-bold text-center text-black md:text-left">
        {searchResults.name} | ({searchResults.symbol})
      </Link>
      {/* <p className="text-black">{searchResults.currency}</p>
      <p className="font-bold text-black">
        {searchResults.exchangeShortName} - {searchResults.stockExchange}
      </p> */}
      <AddPortfolio
        onPortfolioCreate={onPortfolioCreate}
        symbol={searchResults.symbol}
      />
    </div>
  );
};

export default Card;

