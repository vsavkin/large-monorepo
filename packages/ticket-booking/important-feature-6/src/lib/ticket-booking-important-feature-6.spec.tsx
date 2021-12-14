import { render } from '@testing-library/react';

import TicketBookingImportantFeature6 from './ticket-booking-important-feature-6';

describe('TicketBookingImportantFeature6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature6 />);
    expect(baseElement).toBeTruthy();
  });
});
