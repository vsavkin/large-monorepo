import { render } from '@testing-library/react';

import Dialog233 from './dialog233';

describe('Dialog233', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog233 />);
    expect(baseElement).toBeTruthy();
  });
});
