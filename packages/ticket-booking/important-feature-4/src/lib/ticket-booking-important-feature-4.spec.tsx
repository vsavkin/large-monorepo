import { render } from '@testing-library/react';

import TicketBookingImportantFeature4 from './ticket-booking-important-feature-4';

describe('TicketBookingImportantFeature4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature4 />);
    expect(baseElement).toBeTruthy();
  });
});
