import { describe, it, expect } from 'vitest';
import dsv from '@stdlib/utils/dsv';
import objectKeys from '@stdlib/utils/keys';
import Parser from '@stdlib/utils-dsv-base-parse';

describe('grok the dsv utils', () => {
    it('should ', () => {
        var parser = new Parser();
        var actual = parser.next( '4,5,6\r\n7,8,9\r\n' );
        console.log(actual);
    });
});
