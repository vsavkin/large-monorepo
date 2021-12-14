import { render } from '@testing-library/react';

import TicketBookingImportantFeature8 from './ticket-booking-important-feature-8';

describe('TicketBookingImportantFeature8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature8 />);
    expect(baseElement).toBeTruthy();
  });
});
