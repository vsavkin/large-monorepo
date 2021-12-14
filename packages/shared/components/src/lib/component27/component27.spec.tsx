import { render } from '@testing-library/react';

import Component27 from './component27';

describe('Component27', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component27 />);
    expect(baseElement).toBeTruthy();
  });
});
