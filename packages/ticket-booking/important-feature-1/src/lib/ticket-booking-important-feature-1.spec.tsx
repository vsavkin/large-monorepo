import { render } from '@testing-library/react';

import TicketBookingImportantFeature1 from './ticket-booking-important-feature-1';

describe('TicketBookingImportantFeature1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature1 />);
    expect(baseElement).toBeTruthy();
  });
});
