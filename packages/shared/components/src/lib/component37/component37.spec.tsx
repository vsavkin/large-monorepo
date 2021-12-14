import { render } from '@testing-library/react';

import Component37 from './component37';

describe('Component37', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component37 />);
    expect(baseElement).toBeTruthy();
  });
});
