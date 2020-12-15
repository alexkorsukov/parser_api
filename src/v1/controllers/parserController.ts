import { Request, Response } from 'express';
import {
  ParseDataErrorInterface,
  ParseDataInterface,
  ResponseDataInterface
} from '../../shared/interfaces';
import { sendError } from '../../shared/utils';
import { parseData } from '../utils/utils';

/**
 * Controller for parsing data API V1
 *
 * @param req
 * @param res
 */
export const dataParser = (req: Request, res: Response) => {
  const data: string = req.body.data;

  const parsedResult = parseData(data);

  if (parsedResult.result === false) {
    const errorResult = parsedResult as ParseDataErrorInterface;
    return sendError(res, errorResult.error);
  }

  const successResult = parsedResult as ParseDataInterface;
  const response: ResponseDataInterface = {
    statusCode: 200,
    data: successResult.data
  };

  return res.status(200).json(response);
};
