import { render } from '@testing-library/react';

import Dialog58 from './dialog58';

describe('Dialog58', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog58 />);
    expect(baseElement).toBeTruthy();
  });
});
