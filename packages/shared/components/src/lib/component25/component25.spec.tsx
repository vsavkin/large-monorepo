import { render } from '@testing-library/react';

import Component25 from './component25';

describe('Component25', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component25 />);
    expect(baseElement).toBeTruthy();
  });
});
