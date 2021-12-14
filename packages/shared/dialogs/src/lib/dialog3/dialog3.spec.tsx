import { render } from '@testing-library/react';

import Dialog3 from './dialog3';

describe('Dialog3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog3 />);
    expect(baseElement).toBeTruthy();
  });
});
