import { render } from '@testing-library/react';

import Dialog230 from './dialog230';

describe('Dialog230', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog230 />);
    expect(baseElement).toBeTruthy();
  });
});
