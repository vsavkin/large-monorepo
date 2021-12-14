import { render } from '@testing-library/react';

import TicketBookingImportantFeature15 from './ticket-booking-important-feature-15';

describe('TicketBookingImportantFeature15', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature15 />);
    expect(baseElement).toBeTruthy();
  });
});
