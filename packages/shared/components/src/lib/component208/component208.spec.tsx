import { render } from '@testing-library/react';

import Component208 from './component208';

describe('Component208', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component208 />);
    expect(baseElement).toBeTruthy();
  });
});
