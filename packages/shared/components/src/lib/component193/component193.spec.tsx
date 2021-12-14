import { render } from '@testing-library/react';

import Component193 from './component193';

describe('Component193', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component193 />);
    expect(baseElement).toBeTruthy();
  });
});
