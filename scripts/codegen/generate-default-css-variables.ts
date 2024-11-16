import fs from 'node:fs';
import path from 'node:path';
import { convertCssVariables } from '../../packages/@mantine/core/src/core/MantineProvider/convert-css-variables/convert-css-variables';
import { DEFAULT_THEME } from '../../packages/@mantine/core/src/core/MantineProvider/default-theme';
import { defaultCssVariablesResolver } from '../../packages/@mantine/core/src/core/MantineProvider/MantineCssVariables/default-css-variables-resolver';

fs.writeFileSync(
  path.join(
    process.cwd(),
    'packages/@mantine/core/src/core/MantineProvider/default-css-variables.css'
  ),
  `/* stylelint-disable */\n${convertCssVariables(defaultCssVariablesResolver(DEFAULT_THEME), ':root')}`
);
