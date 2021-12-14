import { render } from '@testing-library/react';

import Dialog121 from './dialog121';

describe('Dialog121', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog121 />);
    expect(baseElement).toBeTruthy();
  });
});
