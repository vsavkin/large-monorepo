import { render } from '@testing-library/react';

import Dialog99 from './dialog99';

describe('Dialog99', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog99 />);
    expect(baseElement).toBeTruthy();
  });
});
