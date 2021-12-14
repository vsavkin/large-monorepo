import { render } from '@testing-library/react';

import Component175 from './component175';

describe('Component175', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component175 />);
    expect(baseElement).toBeTruthy();
  });
});
