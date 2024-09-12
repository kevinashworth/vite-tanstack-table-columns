import clsx from "clsx";
import integerFormatter from "@/lib/integerFormatter";

interface Props {
  amount: number | null;
}

function AmountCell({ amount }: Props) {
  const value = amount ?? 0;
  const showColorGreen = value > 0;
  const showColorRed = value < 0;
  return (
    <div
      className={clsx("text-right font-medium", {
        "text-green-600": showColorGreen,
        "text-red-800": showColorRed,
      })}
    >
      {integerFormatter(value)}
    </div>
  );
}

export default AmountCell;
