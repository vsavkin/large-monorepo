import { render } from '@testing-library/react';

import Component169 from './component169';

describe('Component169', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component169 />);
    expect(baseElement).toBeTruthy();
  });
});
