

/* ************************************************************************************************
 *                                            SERVICE                                             *
 ************************************************************************************************ */

/**
 * Clipboard Service
 * Object in charge of interacting with the Clipboard API.
 */
type IClipboardService = {
  // properties
  isSupported: boolean;

  // actions
  write: (data: IClipboardItem[]) => Promise<void>;
  writeText: (data: string) => Promise<void>;
  read: () => Promise<IClipboardItem[]>;
  readText: () => Promise<string>;
};





/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * Clipboard Item
 * Represents an item that can be copied to or read from the clipboard.
 * https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem
 */
type IClipboardItem = ClipboardItem;





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  // service
  IClipboardService,

  // types
  IClipboardItem,
};
