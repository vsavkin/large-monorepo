import { render } from '@testing-library/react';

import Component240 from './component240';

describe('Component240', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component240 />);
    expect(baseElement).toBeTruthy();
  });
});
