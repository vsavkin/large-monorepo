import { render } from '@testing-library/react';

import Component247 from './component247';

describe('Component247', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component247 />);
    expect(baseElement).toBeTruthy();
  });
});
