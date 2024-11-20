import { test, expect } from 'vitest';
import { Money } from '../src/lib/Money.js';

test('Money should accept CAD currency', () => {
    // Arrange - Setup for the test
    const expectedCurrency = 'CAD';

    // Act - Do the action you want to test
    const actual = new Money({ amount: 0.03, currency: 'CAD'});

    // Assert - Check that it works
    expect(actual.currency).toBe(expectedCurrency);
})