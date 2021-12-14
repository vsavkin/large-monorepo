import { render } from '@testing-library/react';

import Component2 from './component2';

describe('Component2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component2 />);
    expect(baseElement).toBeTruthy();
  });
});
