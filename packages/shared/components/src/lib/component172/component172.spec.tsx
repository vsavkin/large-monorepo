import { render } from '@testing-library/react';

import Component172 from './component172';

describe('Component172', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component172 />);
    expect(baseElement).toBeTruthy();
  });
});
