import { render } from '@testing-library/react';

import TicketBookingImportantFeature10 from './ticket-booking-important-feature-10';

describe('TicketBookingImportantFeature10', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature10 />);
    expect(baseElement).toBeTruthy();
  });
});
