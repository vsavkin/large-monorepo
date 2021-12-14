import { render } from '@testing-library/react';

import Component192 from './component192';

describe('Component192', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component192 />);
    expect(baseElement).toBeTruthy();
  });
});
