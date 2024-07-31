// src/js/__tests__/health.test.js
const { getHealthStatus } = require('../health');

test('should return healthy when health is more than 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 90 });
    expect(result).toBe('healthy');
});

test('should return wounded when health is exactly 50', () => {
    const result = getHealthStatus({ name: 'Маг', health: 50 });
    expect(result).toBe('wounded');
});

test('should return wounded when health is between 15 and 49', () => {
    const result = getHealthStatus({ name: 'Маг', health: 30 });
    expect(result).toBe('wounded');
});

test('should return critical when health is less than 15', () => {
    const result = getHealthStatus({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
});
