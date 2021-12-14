import { render } from '@testing-library/react';

import Dialog92 from './dialog92';

describe('Dialog92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog92 />);
    expect(baseElement).toBeTruthy();
  });
});
