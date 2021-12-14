import { render } from '@testing-library/react';

import Component147 from './component147';

describe('Component147', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component147 />);
    expect(baseElement).toBeTruthy();
  });
});
