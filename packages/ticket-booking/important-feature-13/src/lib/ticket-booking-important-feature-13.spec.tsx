import { render } from '@testing-library/react';

import TicketBookingImportantFeature13 from './ticket-booking-important-feature-13';

describe('TicketBookingImportantFeature13', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature13 />);
    expect(baseElement).toBeTruthy();
  });
});
