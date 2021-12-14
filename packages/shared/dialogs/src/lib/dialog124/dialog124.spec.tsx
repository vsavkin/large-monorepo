import { render } from '@testing-library/react';

import Dialog124 from './dialog124';

describe('Dialog124', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog124 />);
    expect(baseElement).toBeTruthy();
  });
});
