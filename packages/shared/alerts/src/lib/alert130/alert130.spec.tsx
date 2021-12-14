import { render } from '@testing-library/react';

import Alert130 from './alert130';

describe('Alert130', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert130 />);
    expect(baseElement).toBeTruthy();
  });
});
