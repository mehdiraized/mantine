import { generateDeclarations } from 'mantine-docgen-script';
import { getPath } from '../utils/get-path';
import { DOCGEN_PATHS } from './docgen-paths';

generateDeclarations({
  tsConfigPath: getPath('tsconfig.json'),
  outputPath: getPath('apps/mantine.dev/src/.docgen'),
  componentsPaths: DOCGEN_PATHS,
  excludeProps: ['ms', 'me', 'ps', 'pe'],
  typesReplacement: {
    'Omit<Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref">, "value"> | undefined':
      'React.ComponentPropsWithoutRef<"input">',
    '(__CloseButtonProps & ElementProps<"button">) | undefined': 'CloseButtonProps',
    'Partial<Omit<TransitionProps, "mounted">> | undefined': 'TransitionProps',
    'Omit<Props, "ref"> | undefined': 'RechartsProps',
    '[DefaultMantineColor, DefaultMantineColor] | undefined': '[MantineColor, MantineColor]',
    'CategoricalChartProps | undefined': 'RechartsProps',
    'Omit<TooltipProps<any, any>, "ref"> | undefined': 'RechartsProps',
    '((series: RadarChartSeries) => Omit<Props, "ref">) | Omit<Props, "ref"> | undefined':
      '((series: RadarChartSeries) => RechartsProps) | RechartsProps',
    'TimePickerAmPmLabels | undefined': '{ am: string; pm: string }',
    'TimePickerFormat | undefined': '"12h" | "24h"',
    '(Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> & DataAttributes) | undefined':
      'React.ComponentPropsWithoutRef<"select">',
    '(CloseButtonProps & ElementProps<"button"> & DataAttributes) | undefined': 'CloseButtonProps',
    '(Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & DataAttributes) | undefined':
      'React.ComponentPropsWithoutRef<"input">',
  },
});
