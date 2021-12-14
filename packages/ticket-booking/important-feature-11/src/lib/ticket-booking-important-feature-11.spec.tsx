import { render } from '@testing-library/react';

import TicketBookingImportantFeature11 from './ticket-booking-important-feature-11';

describe('TicketBookingImportantFeature11', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TicketBookingImportantFeature11 />);
    expect(baseElement).toBeTruthy();
  });
});
