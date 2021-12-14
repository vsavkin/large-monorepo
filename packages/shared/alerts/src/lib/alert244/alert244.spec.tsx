import { render } from '@testing-library/react';

import Alert244 from './alert244';

describe('Alert244', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert244 />);
    expect(baseElement).toBeTruthy();
  });
});
