import { render } from '@testing-library/react';

import Dialog12 from './dialog12';

describe('Dialog12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog12 />);
    expect(baseElement).toBeTruthy();
  });
});
