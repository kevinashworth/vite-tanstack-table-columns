import dayjs from 'dayjs'

interface Props {
  date: string | null | undefined
  format?: string
}

function DateCell({ date, format }: Props) {
  const formattedDate = date
    ? dayjs(date).format(format ? format : 'M/D/YY')
    : '—'
  return <div className="whitespace-nowrap">{formattedDate}</div>
}

export default DateCell
