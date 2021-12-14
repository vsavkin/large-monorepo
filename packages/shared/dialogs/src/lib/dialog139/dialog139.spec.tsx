import { render } from '@testing-library/react';

import Dialog139 from './dialog139';

describe('Dialog139', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog139 />);
    expect(baseElement).toBeTruthy();
  });
});
