import { render } from '@testing-library/react';

import Component231 from './component231';

describe('Component231', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component231 />);
    expect(baseElement).toBeTruthy();
  });
});
