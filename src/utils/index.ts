import { TKeyFactoryProps } from 'containers/KeyFactory/KeyFactory';

export function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

type TKeyRows = TKeyFactoryProps & { key: string };
export const firstRowKeys: TKeyRows[] = [
  { type: 'special', characters: { tLeft: '|', bLeft: '\\' }, keyToListen: 'Backquote', key: 'Backquote' },
  { type: 'number', characters: { tLeft: '!', bLeft: '1' }, keyToListen: '1', key: '1' },
  { type: 'number', characters: { tLeft: `"`, bLeft: '2', bRight: '@' }, keyToListen: '2', key: '2' },
  { type: 'number', characters: { tLeft: '#', bLeft: '3', bRight: '£' }, keyToListen: '3', key: '3' },
  { type: 'number', characters: { tLeft: '$', bLeft: '4', bRight: '§' }, keyToListen: '4', key: '4' },
  { type: 'number', characters: { tLeft: '%', bLeft: '5' }, keyToListen: '5', key: '5' },
  { type: 'number', characters: { tLeft: '&', bLeft: '6' }, keyToListen: '6', key: '6' },
  { type: 'number', characters: { tLeft: '/', bLeft: '7', bRight: '{' }, keyToListen: '7', key: '7' },
  { type: 'number', characters: { tLeft: '(', bLeft: '8', bRight: '[' }, keyToListen: '8', key: '8' },
  { type: 'number', characters: { tLeft: ')', bLeft: '9', bRight: ']' }, keyToListen: '9', key: '9' },
  { type: 'number', characters: { tLeft: '=', bLeft: '0', bRight: '}' }, keyToListen: '0', key: '0' },
  { type: 'special', characters: { tLeft: '?', bLeft: `'` }, keyToListen: 'Minus', key: 'Minus' },
  { type: 'special', characters: { tLeft: '»', bLeft: '«' }, keyToListen: 'Equal', key: 'Equal' },
  { type: 'backspace', key: 'backspace', className: '!mr-0' },
];

export const secondRowKeys: TKeyRows[] = [
  { type: 'tab', key: 'tab' },
  { type: 'letter', characters: { tLeft: 'Q' }, keyToListen: 'Q', key: 'Q' },
  { type: 'letter', characters: { tLeft: 'W' }, keyToListen: 'W', key: 'W' },
  { type: 'letter', characters: { tLeft: 'E', bRight: '€' }, keyToListen: 'E', key: 'E' },
  { type: 'letter', characters: { tLeft: 'R' }, keyToListen: 'R', key: 'R' },
  { type: 'letter', characters: { tLeft: 'T' }, keyToListen: 'T', key: 'T' },
  { type: 'letter', characters: { tLeft: 'Y' }, keyToListen: 'Y', key: 'Y' },
  { type: 'letter', characters: { tLeft: 'U' }, keyToListen: 'U', key: 'U' },
  { type: 'letter', characters: { tLeft: 'I' }, keyToListen: 'I', key: 'I' },
  { type: 'letter', characters: { tLeft: 'O' }, keyToListen: 'O', key: 'O' },
  { type: 'letter', characters: { tLeft: 'P' }, keyToListen: 'P', key: 'P' },
  { type: 'special', characters: { tLeft: '*', bLeft: '+', bRight: '¨' }, keyToListen: 'BracketLeft', key: 'BracketLeft' },
  { type: 'special', characters: { tLeft: '`', bLeft: '´' }, keyToListen: 'BracketRight', key: 'BracketRight' },
];

export const thirdRowKeys: TKeyRows[] = [
  { type: 'capsLock', key: 'capsLock' },
  { type: 'letter', characters: { tLeft: 'A' }, keyToListen: 'A', key: 'A' },
  { type: 'letter', characters: { tLeft: 'S' }, keyToListen: 'S', key: 'S' },
  { type: 'letter', characters: { tLeft: 'D' }, keyToListen: 'D', key: 'D' },
  { type: 'letter', characters: { tLeft: 'F' }, keyToListen: 'F', key: 'F' },
  { type: 'letter', characters: { tLeft: 'G' }, keyToListen: 'G', key: 'G' },
  { type: 'letter', characters: { tLeft: 'H' }, keyToListen: 'H', key: 'H' },
  { type: 'letter', characters: { tLeft: 'J' }, keyToListen: 'J', key: 'J' },
  { type: 'letter', characters: { tLeft: 'K' }, keyToListen: 'K', key: 'K' },
  { type: 'letter', characters: { tLeft: 'L' }, keyToListen: 'L', key: 'L' },
  { type: 'special', characters: { tLeft: 'Ç' }, keyToListen: 'Semicolon', key: 'Semicolon' },
  { type: 'special', characters: { tLeft: 'ª', bLeft: 'º' }, keyToListen: 'Quote', key: 'Quote' },
  { type: 'special', characters: { tLeft: '^', bLeft: '~' }, keyToListen: 'Backslash', key: 'Backslash', className: '!mr-0' },
];

export const fourthRowKeys: TKeyRows[] = [
  { type: 'leftShift', key: 'leftShift' },
  { type: 'special', characters: { tLeft: '>', bLeft: '<' }, keyToListen: 'IntlBackslash', key: 'IntlBackslash' },
  { type: 'letter', characters: { tLeft: 'Z' }, keyToListen: 'Z', key: 'Z' },
  { type: 'letter', characters: { tLeft: 'X' }, keyToListen: 'X', key: 'X' },
  { type: 'letter', characters: { tLeft: 'C' }, keyToListen: 'C', key: 'C' },
  { type: 'letter', characters: { tLeft: 'V' }, keyToListen: 'V', key: 'V' },
  { type: 'letter', characters: { tLeft: 'B' }, keyToListen: 'B', key: 'B' },
  { type: 'letter', characters: { tLeft: 'N' }, keyToListen: 'N', key: 'N' },
  { type: 'letter', characters: { tLeft: 'M' }, keyToListen: 'M', key: 'M' },
  { type: 'special', characters: { tLeft: ';', bLeft: ',' }, keyToListen: 'Comma', key: 'Comma' },
  { type: 'special', characters: { tLeft: ':', bLeft: '.' }, keyToListen: 'Period', key: 'Period' },
  { type: 'special', characters: { tLeft: '_', bLeft: '-' }, keyToListen: 'Slash', key: 'Slash' },
  { type: 'rightShift', key: 'capsLock', className: '!mr-0' },
];

export const fifthRowKeys: TKeyRows[] = [
  { type: 'leftCtrl', key: 'leftCtrl' },
  { type: 'special', characters: { tLeft: 'Fn' }, keyToListen: 'Fn', key: 'Fn' },
  { type: 'windows', key: 'capsLock' },
  { type: 'special', characters: { tLeft: 'Alt' }, keyToListen: 'AltLeft', key: 'AltLeft' },
  { type: 'space', key: 'space' },
  { type: 'special', characters: { tLeft: 'AltGr' }, keyToListen: 'AltRight', key: 'AltRight' },
  { type: 'special', characters: { tLeft: 'Fn' }, keyToListen: 'Fn', key: 'FnRight', className: 'text-blue-400' },
  { type: 'contextMenu', key: 'ContextMenu' },
  { type: 'rightCtrl', key: 'rightCtrl', className: '!mr-0' },
];
