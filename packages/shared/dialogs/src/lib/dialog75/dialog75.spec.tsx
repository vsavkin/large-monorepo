import { render } from '@testing-library/react';

import Dialog75 from './dialog75';

describe('Dialog75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog75 />);
    expect(baseElement).toBeTruthy();
  });
});
