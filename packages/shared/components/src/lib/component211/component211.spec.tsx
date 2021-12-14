import { render } from '@testing-library/react';

import Component211 from './component211';

describe('Component211', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component211 />);
    expect(baseElement).toBeTruthy();
  });
});
