import { Response } from 'express';
import { ERRORS, ResponseDataErrorInterface } from '../shared/interfaces';

/**
 * Send an error to a server
 *
 * @param res
 * @param err
 */
export const sendError = (res: Response, err: ERRORS) => {
  const response: ResponseDataErrorInterface = {
    statusCode: 500,
    error: err
  };

  return res.status(500).json(response);
};
