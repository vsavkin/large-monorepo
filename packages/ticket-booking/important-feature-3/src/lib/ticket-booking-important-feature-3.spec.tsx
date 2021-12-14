import { render } from '@testing-library/react';

import TicketBookingImportantFeature3 from './ticket-booking-important-feature-3';

describe('TicketBookingImportantFeature3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature3 />);
    expect(baseElement).toBeTruthy();
  });
});
