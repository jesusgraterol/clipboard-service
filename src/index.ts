import { encodeError } from 'error-message-utils';
import { IClipboardService, IClipboardItem } from './types.js';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */

/**
 * ClipboardService Factory
 * Generates the object in charge of interacting with the Clipboard API.
 */
const clipboardServiceFactory = (): IClipboardService => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // indicates if the Clipboard API is supported by the user's browser
  const __isSupported: boolean = Boolean(window)
    && Boolean(window.navigator)
    && Boolean(window.navigator.clipboard)
    && typeof window.navigator.clipboard.read === 'function'
    && typeof window.navigator.clipboard.readText === 'function'
    && typeof window.navigator.clipboard.write === 'function'
    && typeof window.navigator.clipboard.writeText === 'function';





  /* **********************************************************************************************
   *                                            HELPERS                                           *
   ********************************************************************************************** */

  /**
   * Verifies if the Clipboard API is supported by the user's browser.
   * @throws
   * - UNSUPPORTED_API: if the API is not supported
   */
  const __validateAvailability = (): void => {
    if (!__isSupported) {
      throw new Error(encodeError('The Clipboard API is not supported by the browser.', 'UNSUPPORTED_API'));
    }
  };





  /* **********************************************************************************************
   *                                            ACTIONS                                           *
   ********************************************************************************************** */

  /**
   * Writes a list of ClipboardItem to the system clipboard.
   * @param data
   * @returns Promise<void>
   * @throws
   * - NotAllowedError: if writing to the clipboard is not allowed.
   * - UNSUPPORTED_API: if the API is not supported
   */
  const write = (data: IClipboardItem[]): Promise<void> => {
    __validateAvailability();
    return window.navigator.clipboard.write(data);
  };

  /**
   * Writes text to the system clipboard.
   * @returns Promise<void>
   * @throws
   * - NotAllowedError: if writing to the clipboard is not allowed.
   * - UNSUPPORTED_API: if the API is not supported
   */
  const writeText = (data: string): Promise<void> => {
    __validateAvailability();
    return window.navigator.clipboard.writeText(data);
  };

  /**
   * Requests a list of ClipboardItem from the system clipboard.
   * @returns Promise<IClipboardItem[]>
   * @throws
   * - NotAllowedError: if the access to read the clipboard is not allowed
   * - NotFoundError: if the clipboard indicates that it contains data that can be represented as a
   * text but is unable to provide a textual representation
   * - UNSUPPORTED_API: if the API is not supported
   */
  const read = (): Promise<IClipboardItem[]> => {
    __validateAvailability();
    return window.navigator.clipboard.read();
  };

  /**
   * Requests text from the system clipboard.
   * @returns Promise<string>
   * @throws
   * - NotAllowedError: if the access to read the clipboard is not allowed
   * - NotFoundError: if the clipboard indicates that it contains data that can be represented as a
   * text but is unable to provide a textual representation
   * - UNSUPPORTED_API: if the API is not supported
   */
  const readText = (): Promise<string> => {
    __validateAvailability();
    return window.navigator.clipboard.readText();
  };





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    get isSupported() {
      return __isSupported;
    },

    // actions
    write,
    writeText,
    read,
    readText,
  });
};





/* ************************************************************************************************
 *                                        GLOBAL INSTANCE                                         *
 ************************************************************************************************ */
const ClipboardService = clipboardServiceFactory();





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  // types
  type IClipboardService,

  // service
  ClipboardService,
};
