import { render } from '@testing-library/react';

import Dialog5 from './dialog5';

describe('Dialog5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog5 />);
    expect(baseElement).toBeTruthy();
  });
});
