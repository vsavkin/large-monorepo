import { render } from '@testing-library/react';

import Component60 from './component60';

describe('Component60', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component60 />);
    expect(baseElement).toBeTruthy();
  });
});
