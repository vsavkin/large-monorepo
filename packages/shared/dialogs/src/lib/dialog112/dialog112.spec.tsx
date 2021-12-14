import { render } from '@testing-library/react';

import Dialog112 from './dialog112';

describe('Dialog112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog112 />);
    expect(baseElement).toBeTruthy();
  });
});
