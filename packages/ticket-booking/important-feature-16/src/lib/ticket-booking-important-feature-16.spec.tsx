import { render } from '@testing-library/react';

import TicketBookingImportantFeature16 from './ticket-booking-important-feature-16';

describe('TicketBookingImportantFeature16', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature16 />);
    expect(baseElement).toBeTruthy();
  });
});
