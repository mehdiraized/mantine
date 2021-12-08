import React from 'react';
import dayjs from 'dayjs';
import { formatMonthLabel } from './format-month-label/format-month-label';
import { isMonthInRange } from '../MonthPicker/is-month-in-range/is-month-in-range';
import { CalendarHeader } from '../CalendarHeader/CalendarHeader';
import { Month, MonthSettings, DayKeydownPayload } from '../../Month';

export interface MonthsListProps extends MonthSettings {
  amountOfMonths: number;
  month: Date;
  locale: string;
  allowLevelChange: boolean;
  daysRefs: React.RefObject<HTMLButtonElement[][][]>;
  onMonthChange(month: Date): void;
  onNextLevel(): void;
  onDayKeyDown(
    monthIndex: number,
    payload: DayKeydownPayload,
    event: React.KeyboardEvent<HTMLButtonElement>
  ): void;
}

export function MonthsList({
  amountOfMonths,
  month,
  locale,
  minDate,
  maxDate,
  allowLevelChange,
  size,
  daysRefs,
  onMonthChange,
  onNextLevel,
  onDayKeyDown,
  ...others
}: MonthsListProps) {
  const nextMonth = dayjs(month).add(amountOfMonths, 'months').toDate();
  const previousMonth = dayjs(month).subtract(1, 'months').toDate();

  const months = Array(amountOfMonths)
    .fill(0)
    .map((_, index) => {
      const monthDate = dayjs(month).add(index, 'months').toDate();
      return (
        <div key={index}>
          <CalendarHeader
            hasNext={
              index + 1 === amountOfMonths && isMonthInRange({ date: nextMonth, minDate, maxDate })
            }
            hasPrevious={index === 0 && isMonthInRange({ date: previousMonth, minDate, maxDate })}
            label={formatMonthLabel({ month: monthDate, locale })}
            onNext={() => onMonthChange(dayjs(month).add(amountOfMonths, 'months').toDate())}
            onPrevious={() =>
              onMonthChange(dayjs(month).subtract(amountOfMonths, 'months').toDate())
            }
            onNextLevel={onNextLevel}
            nextLevelDisabled={!allowLevelChange}
            size={size}
          />

          <Month
            month={monthDate}
            daysRefs={daysRefs.current[index]}
            onDayKeyDown={(...args) => onDayKeyDown(index, ...args)}
            size={size}
            minDate={minDate}
            maxDate={maxDate}
            {...others}
          />
        </div>
      );
    });

  return <>{months}</>;
}