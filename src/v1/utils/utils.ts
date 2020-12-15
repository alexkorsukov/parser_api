import { isEmpty } from 'lodash';
import {
  ERRORS,
  ParseDataErrorInterface,
  ParseDataInterface
} from '../../shared/interfaces';

/**
 * Parse data
 *
 * @param data
 */
export const parseData = (
  data: string
): ParseDataInterface | ParseDataErrorInterface => {
  if (isEmpty(data)) {
    return { result: false, error: ERRORS.ERROR_100 };
  }

  /*
   * RegEx for data
   *
   * - first name can be anything
   * - last name should not start with a digit
   * - phone number should be 7 digits
   */
  const res = data.match(/^(.*?0000)([^\d].*?000)(\d{7})$/);

  const firstName = res?.[1] ?? '';
  const lastName = res?.[2] ?? '';
  const phone = res?.[3] ?? '';

  if (isEmpty(firstName) && isEmpty(lastName) && isEmpty(phone)) {
    return { result: false, error: ERRORS.ERROR_101 };
  }

  return { result: true, data: { firstName, lastName, phone } };
};
