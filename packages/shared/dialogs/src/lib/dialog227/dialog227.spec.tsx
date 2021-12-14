import { render } from '@testing-library/react';

import Dialog227 from './dialog227';

describe('Dialog227', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog227 />);
    expect(baseElement).toBeTruthy();
  });
});
