import { render } from '@testing-library/react';

import Dialog152 from './dialog152';

describe('Dialog152', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog152 />);
    expect(baseElement).toBeTruthy();
  });
});
