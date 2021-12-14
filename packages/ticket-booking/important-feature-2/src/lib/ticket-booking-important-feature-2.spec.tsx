import { render } from '@testing-library/react';

import TicketBookingImportantFeature2 from './ticket-booking-important-feature-2';

describe('TicketBookingImportantFeature2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature2 />);
    expect(baseElement).toBeTruthy();
  });
});
