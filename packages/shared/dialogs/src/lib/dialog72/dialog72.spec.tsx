import { render } from '@testing-library/react';

import Dialog72 from './dialog72';

describe('Dialog72', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog72 />);
    expect(baseElement).toBeTruthy();
  });
});
