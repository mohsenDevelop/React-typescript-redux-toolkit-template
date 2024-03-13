import { createTheme } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'IRANYekanX !important',
  primaryColor: 'cyan',
  shadows: {
    'card': '0px 2px 2px 0px #00000040',
  },
  colors: {
    'cyan': ['#e1fdff', '#d3f4f8', '#ade6eb', '#84d6df', '#61cad4', '#4ac2cd', '#39becb', '#25a8b3', '#0c95a0', '#00828c'],
    'typo': ['#f5f5f5', '#e7e7e7', '#cdcdcd', '#b2b2b2', '#141517', '#131B22', '#495157', '#757575', '#070707', '#000000'],
    'red': ['#ffeaea', '#fdd3d3', '#f5a5a5', '#ef7575', '#e94b4a', '#e63230', '#e62322', '#cd1616', '#b70f12', '#D31717'],
    'blue': [
      '#e9fbfb',
      '#ddf0f2',
      '#BAC9CF',
      '#96ced2',
      '#78c0c5',
      '#64b7bd',
      '#50C4CF',
      '#469ca3',
      '#388b91',
      '#20797f'
    ],
    gray: [
      '#ffffff',
      '#F1F3F5',
      '#d9d9d9',
      '#b2b2b2',
      '#9a9a9a',
      '#8b8b8b',
      '#848484',
      '#717171',
      '#676465',
      '#5e5457'
    ]

  },
});
