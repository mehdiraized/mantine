import { createSafeContext, GetStylesApi } from '@mantine/core';
import type { CodeHighlightFactory } from './CodeHighlight';

interface CodeHighlightContext {
  getStyles: GetStylesApi<CodeHighlightFactory>;
}

export const [CodeHighlightProvider, useCodeHighlightContext] =
  createSafeContext<CodeHighlightContext>(
    'CodeHighlightProvider was not found in the component tree'
  );
