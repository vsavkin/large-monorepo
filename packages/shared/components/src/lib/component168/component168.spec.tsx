import { render } from '@testing-library/react';

import Component168 from './component168';

describe('Component168', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component168 />);
    expect(baseElement).toBeTruthy();
  });
});
