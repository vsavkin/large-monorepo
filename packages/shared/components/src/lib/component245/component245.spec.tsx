import { render } from '@testing-library/react';

import Component245 from './component245';

describe('Component245', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component245 />);
    expect(baseElement).toBeTruthy();
  });
});
