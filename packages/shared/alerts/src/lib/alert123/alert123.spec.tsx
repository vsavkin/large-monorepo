import { render } from '@testing-library/react';

import Alert123 from './alert123';

describe('Alert123', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert123 />);
    expect(baseElement).toBeTruthy();
  });
});
