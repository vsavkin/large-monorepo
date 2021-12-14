import { render } from '@testing-library/react';

import Component151 from './component151';

describe('Component151', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component151 />);
    expect(baseElement).toBeTruthy();
  });
});
