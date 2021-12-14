import { render } from '@testing-library/react';

import Dialog247 from './dialog247';

describe('Dialog247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dialog247 />);
    expect(baseElement).toBeTruthy();
  });
});
