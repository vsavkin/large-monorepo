import { render } from '@testing-library/react';

import Dialog174 from './dialog174';

describe('Dialog174', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog174 />);
    expect(baseElement).toBeTruthy();
  });
});
