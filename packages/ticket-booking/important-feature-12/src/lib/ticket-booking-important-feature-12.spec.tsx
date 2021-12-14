import { render } from '@testing-library/react';

import TicketBookingImportantFeature12 from './ticket-booking-important-feature-12';

describe('TicketBookingImportantFeature12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature12 />);
    expect(baseElement).toBeTruthy();
  });
});
