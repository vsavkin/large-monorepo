import { render } from '@testing-library/react';

import TicketBookingImportantFeature7 from './ticket-booking-important-feature-7';

describe('TicketBookingImportantFeature7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature7 />);
    expect(baseElement).toBeTruthy();
  });
});
