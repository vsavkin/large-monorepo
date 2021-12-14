import { render } from '@testing-library/react';

import Component89 from './component89';

describe('Component89', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component89 />);
    expect(baseElement).toBeTruthy();
  });
});
