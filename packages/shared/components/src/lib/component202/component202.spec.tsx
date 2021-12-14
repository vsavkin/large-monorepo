import { render } from '@testing-library/react';

import Component202 from './component202';

describe('Component202', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component202 />);
    expect(baseElement).toBeTruthy();
  });
});
