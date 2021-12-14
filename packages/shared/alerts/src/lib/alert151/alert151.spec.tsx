import { render } from '@testing-library/react';

import Alert151 from './alert151';

describe('Alert151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert151 />);
    expect(baseElement).toBeTruthy();
  });
});
