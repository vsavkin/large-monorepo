import { render } from '@testing-library/react';

import Component102 from './component102';

describe('Component102', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component102 />);
    expect(baseElement).toBeTruthy();
  });
});
