import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePrices } from "../hooks/usePrices";

export const Coins = () => {
  const { id } = useParams();
  const { getCurrency, currency: c } = usePrices();

  useEffect(() => {
    getCurrency(id as string);
    //eslint-disable-next-line
  }, [id]);

  return c ? (
    <div className="container mt-6 m-auto">
      <header className="flex justify-between">
        <div className="flex items-center gap-3">
          <img width="24px" src={c.iconUrl} alt={c.uuid} />
          <h2 className="text-gray-500 font-bold text-2xl">
            {c.name}({c.symbol.toUpperCase()})
          </h2>
        </div>
        <div className="flex items-end">
          <h2 className="text-green-400 font-bold text-2xl">
            {c?.price !== null ? parseFloat(c.price).toFixed(2) : "--"} $
          </h2>
        </div>
      </header>
      <div className="divider"></div>
      <div className="shadow stats w-full justify-center">
        <div className="stat">
          <div className="stat-title text-white opacity-100 font-bold">
            Market cap
          </div>
          <div className="stat-value text-gray-500">{c.marketCap !== null ? c.marketCap : "--"} $</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <h1 className="text-3xl text-primary">Loading...</h1>
    </div>
  );
};
