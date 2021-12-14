import { render } from '@testing-library/react';

import Dialog153 from './dialog153';

describe('Dialog153', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog153 />);
    expect(baseElement).toBeTruthy();
  });
});
