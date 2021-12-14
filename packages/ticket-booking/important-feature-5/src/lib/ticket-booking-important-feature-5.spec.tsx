import { render } from '@testing-library/react';

import TicketBookingImportantFeature5 from './ticket-booking-important-feature-5';

describe('TicketBookingImportantFeature5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature5 />);
    expect(baseElement).toBeTruthy();
  });
});
