import { render } from '@testing-library/react';

import Dialog126 from './dialog126';

describe('Dialog126', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog126 />);
    expect(baseElement).toBeTruthy();
  });
});
