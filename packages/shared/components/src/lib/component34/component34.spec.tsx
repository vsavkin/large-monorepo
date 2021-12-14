import { render } from '@testing-library/react';

import Component34 from './component34';

describe('Component34', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component34 />);
    expect(baseElement).toBeTruthy();
  });
});
