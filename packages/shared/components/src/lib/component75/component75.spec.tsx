import { render } from '@testing-library/react';

import Component75 from './component75';

describe('Component75', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component75 />);
    expect(baseElement).toBeTruthy();
  });
});
