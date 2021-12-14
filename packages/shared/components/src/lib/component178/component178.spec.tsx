import { render } from '@testing-library/react';

import Component178 from './component178';

describe('Component178', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component178 />);
    expect(baseElement).toBeTruthy();
  });
});
