import { render } from '@testing-library/react';

import TicketBookingImportantFeature18 from './ticket-booking-important-feature-18';

describe('TicketBookingImportantFeature18', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature18 />);
    expect(baseElement).toBeTruthy();
  });
});
