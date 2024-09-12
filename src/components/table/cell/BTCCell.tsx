import BTC from "@/icons/BTCUSD";
import integerFormatter from "@/lib/integerFormatter";

interface Props {
  amount: number | null;
}

function BTCCell({ amount }: Props) {
  let displayValue = "0";
  if (amount !== null) {
    displayValue = integerFormatter(amount, 5);
  }

  return (
    <div className="flex flex-row align-middle gap-1 justify-end">
      {displayValue}
      <div className="my-auto">
        <BTC className="size-5 fill-orange-700 stroke-orange-700" />
      </div>
    </div>
  );
}

export default BTCCell;
