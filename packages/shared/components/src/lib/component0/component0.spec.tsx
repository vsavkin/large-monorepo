import { render } from '@testing-library/react';

import Component0 from './component0';

describe('Component0', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component0 />);
    expect(baseElement).toBeTruthy();
  });
});
