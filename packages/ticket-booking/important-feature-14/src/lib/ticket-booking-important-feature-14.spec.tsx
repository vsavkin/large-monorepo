import { render } from '@testing-library/react';

import TicketBookingImportantFeature14 from './ticket-booking-important-feature-14';

describe('TicketBookingImportantFeature14', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature14 />);
    expect(baseElement).toBeTruthy();
  });
});
