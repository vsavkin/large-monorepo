import { render } from '@testing-library/react';

import TicketBookingImportantFeature17 from './ticket-booking-important-feature-17';

describe('TicketBookingImportantFeature17', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature17 />);
    expect(baseElement).toBeTruthy();
  });
});
