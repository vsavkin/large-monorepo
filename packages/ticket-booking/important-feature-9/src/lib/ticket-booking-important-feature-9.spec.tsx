import { render } from '@testing-library/react';

import TicketBookingImportantFeature9 from './ticket-booking-important-feature-9';

describe('TicketBookingImportantFeature9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature9 />);
    expect(baseElement).toBeTruthy();
  });
});
