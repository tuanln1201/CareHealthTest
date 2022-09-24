import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useColor } from "../../hooks/useColor";
import { SingleCurrencyInfo } from "../../utils/helpers";

type SingleCurrencyProps = {
  c: SingleCurrencyInfo;
};

export const SingleCurrency: React.FC<SingleCurrencyProps> = ({ c }) => {
  const [pricePercentage24h, setPricePercentage24h] =
    useState<string>("text-secondary");

  const { getColor } = useColor();

  useEffect(() => {
    setPricePercentage24h(getColor(parseFloat(c?.change)));
    //eslint-disable-next-line
  }, [c]);

  return (
    <tr>
      <th className="text-center">{c?.rank}</th>
      <td className="items-center">
        <Link
          to={`/coins/${c?.uuid}`}
          className="flex gap-4 text-orange-300 font-bold"
        >
          <img src={c?.iconUrl} alt="Currency" width="24px" />
          {c?.name}
        </Link>
      </td>
      <td className="text-center">{c?.symbol?.toUpperCase()}</td>
      <td className="text-center">
        {c?.price !== null ? parseFloat(c?.price)?.toFixed(2) : "--"} $
      </td>
      <td className={`text-center ${pricePercentage24h}`}>
        {c?.change !== null ? parseFloat(c?.change)?.toFixed(2) : "--"} %
      </td>
      <td className="text-center">
        {c.marketCap !== null ? c.marketCap : "--"} $
      </td>
    </tr>
  );
};
