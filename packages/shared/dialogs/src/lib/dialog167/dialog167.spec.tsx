import { render } from '@testing-library/react';

import Dialog167 from './dialog167';

describe('Dialog167', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog167 />);
    expect(baseElement).toBeTruthy();
  });
});
