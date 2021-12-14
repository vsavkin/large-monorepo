import { render } from '@testing-library/react';

import TicketBookingImportantFeature0 from './ticket-booking-important-feature-0';

describe('TicketBookingImportantFeature0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature0 />);
    expect(baseElement).toBeTruthy();
  });
});
