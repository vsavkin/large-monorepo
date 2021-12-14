import { render } from '@testing-library/react';

import Dialog219 from './dialog219';

describe('Dialog219', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog219 />);
    expect(baseElement).toBeTruthy();
  });
});
