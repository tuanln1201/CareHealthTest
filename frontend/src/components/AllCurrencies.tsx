import { useEffect, useState } from "react";
import { usePrices } from "../hooks/usePrices";
import { SingleCurrency } from "./Table/SingleCurrency";
import useDebounce from "../utils/useDebounce";
import { Pagination } from "../components/Pagination";
import { HeaderTable } from "../utils/helpers";

type AllCurrenciesProps = {
  sortOption: string;
  searchTerm: string;
};

export const AllCurrencies: React.FC<AllCurrenciesProps> = ({
  sortOption,
  searchTerm,
}) => {
  const { getAllCurrencies, allCurrencies, totalPage } = usePrices();
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      getAllCurrencies(page, sortOption, debouncedSearchTerm);
      setIsSearching(false);
    } else {
      getAllCurrencies(page, sortOption, "");
    }
    //eslint-disable-next-line
  }, [debouncedSearchTerm, page, sortOption]);

  return isSearching ? (
    <div className="flex justify-center">
      <h1 className="text-3xl text-primary">Loading...</h1>
    </div>
  ) : (
    <>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            {HeaderTable?.map((el) => (
              <th key={el} className="text-center text-white">
                {el}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-primary">
          {allCurrencies.map((item) => (
            <SingleCurrency key={item.uuid} c={item} />
          ))}
        </tbody>
      </table>
      <Pagination page={page} setPage={setPage} totalPage={totalPage} />
    </>
  );
};
