import { expect } from 'chai';
import { parseData } from '../v1/utils/utils';
import { ERRORS, ParseDataInterface } from '../shared/interfaces';

/**
 * Testing functionality for Discount Class
 */
describe('Testing Parsing API V1', function() {
  it('Test1 Success: Data Sting = JOHN0000MICHAEL0009994567', function() {
    const data = 'JOHN0000MICHAEL0009994567';
    const result = parseData(data) as ParseDataInterface;

    expect(JSON.stringify(result.data)).equal(
      JSON.stringify({
        firstName: 'JOHN0000',
        lastName: 'MICHAEL000',
        phone: '9994567'
      })
    );
  });
  it('Test2 Failure: Data Sting is empty', function() {
    const result = parseData('') as ParseDataInterface;

    expect(JSON.stringify(result)).equal(
      JSON.stringify({
        result: false,
        error: ERRORS.ERROR_100
      })
    );
  });
  it('Test3 Failure: Data = JOHN000KIM009994567, data format is incorrect', function() {
    const data = 'JOHN000KIM009994567';

    const result = parseData(data) as ParseDataInterface;

    expect(JSON.stringify(result)).equal(
      JSON.stringify({
        result: false,
        error: ERRORS.ERROR_101
      })
    );
  });
});
