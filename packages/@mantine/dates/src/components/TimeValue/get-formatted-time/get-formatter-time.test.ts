import { getFormattedTime } from './get-formatted-time';

describe('@mantine/dates/get-formatted-time', () => {
  it('formats given time string', () => {
    expect(
      getFormattedTime({
        value: '18:30:56',
        format: '24h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: true,
      })
    ).toBe('18:30:56');

    expect(
      getFormattedTime({
        value: '18:30',
        format: '24h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: false,
      })
    ).toBe('18:30');

    expect(
      getFormattedTime({
        value: '18:30',
        format: '12h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: false,
      })
    ).toBe('6:30 PM');

    expect(
      getFormattedTime({
        value: '18:30',
        format: '12h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: true,
      })
    ).toBe('6:30:00 PM');
  });

  it('formats given date object', () => {
    expect(
      getFormattedTime({
        value: new Date(2021, 1, 1, 18, 30, 56),
        format: '24h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: true,
      })
    ).toBe('18:30:56');

    expect(
      getFormattedTime({
        value: new Date(2021, 1, 1, 18, 30),
        format: '24h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: false,
      })
    ).toBe('18:30');

    expect(
      getFormattedTime({
        value: new Date(2021, 1, 1, 18, 30),
        format: '12h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: false,
      })
    ).toBe('6:30 PM');

    expect(
      getFormattedTime({
        value: new Date(2021, 1, 1, 18, 30),
        format: '12h',
        amPmLabels: { am: 'AM', pm: 'PM' },
        withSeconds: true,
      })
    ).toBe('6:30:00 PM');
  });
});
