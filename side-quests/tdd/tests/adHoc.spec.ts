import { describe, it, expect } from 'vitest';
import fs from 'node:fs';

describe('use node fs package', () => {
    it('should find the package.json file', () => {
        const actual = fs.readdirSync('.');
        console.log(actual);
        expect(actual.length).toBeGreaterThan(0);
        expect(actual).toContain('package.json');
    });
});
