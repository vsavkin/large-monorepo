import { render } from '@testing-library/react';

import Component39 from './component39';

describe('Component39', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component39 />);
    expect(baseElement).toBeTruthy();
  });
});
