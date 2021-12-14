import { render } from '@testing-library/react';

import Dialog120 from './dialog120';

describe('Dialog120', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog120 />);
    expect(baseElement).toBeTruthy();
  });
});
