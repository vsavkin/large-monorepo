import { render } from '@testing-library/react';

import Component65 from './component65';

describe('Component65', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component65 />);
    expect(baseElement).toBeTruthy();
  });
});
