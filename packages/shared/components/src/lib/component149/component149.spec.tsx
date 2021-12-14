import { render } from '@testing-library/react';

import Component149 from './component149';

describe('Component149', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component149 />);
    expect(baseElement).toBeTruthy();
  });
});
