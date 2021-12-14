import { render } from '@testing-library/react';

import Component154 from './component154';

describe('Component154', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component154 />);
    expect(baseElement).toBeTruthy();
  });
});
