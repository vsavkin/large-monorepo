import { render } from '@testing-library/react';

import Alert194 from './alert194';

describe('Alert194', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert194 />);
    expect(baseElement).toBeTruthy();
  });
});
