import { render } from '@testing-library/react';

import Dialog208 from './dialog208';

describe('Dialog208', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog208 />);
    expect(baseElement).toBeTruthy();
  });
});
