import { render } from '@testing-library/react';

import Dialog118 from './dialog118';

describe('Dialog118', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog118 />);
    expect(baseElement).toBeTruthy();
  });
});
