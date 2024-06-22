import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { QueryParamHelper, QueryParamKeys } from './query-params';

const mockHash = (hash: string) => {
    Object.defineProperty(window.location, 'hash', {
        writable: true,
        value: hash,
    });
};

describe('QueryParamHelper', () => {
    beforeEach(() => {
        mockHash('?');
    });
    afterEach(() => {
        vi.restoreAllMocks();
    });
    it('set and get query params', () => {
        const location = QueryParamKeys.Location;
        render(<button onClick={() => QueryParamHelper.set(location, '12345')}>Set Location</button>);
        const button = screen.getByText('Set Location');
        fireEvent.click(button);
        expect(window.location.hash).toBe('?location=12345');
        expect(QueryParamHelper.get(location)).toBe('12345');
    });
    it('toggle', () => {
        const acceptsNewPatients = QueryParamKeys.AcceptsNewPatients;
        render(<button onClick={() => QueryParamHelper.toggle(acceptsNewPatients)}>Accepts New Patients</button>);
        expect(window.location.hash).toBe('?');
        const button = screen.getByText('Accepts New Patients');
        fireEvent.click(button);
        expect(window.location.hash).toBe('?actnew');
        fireEvent.click(button);
        expect(window.location.hash).toBe('?');
    });
})