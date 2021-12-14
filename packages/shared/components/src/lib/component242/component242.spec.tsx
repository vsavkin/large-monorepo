import { render } from '@testing-library/react';

import Component242 from './component242';

describe('Component242', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component242 />);
    expect(baseElement).toBeTruthy();
  });
});
