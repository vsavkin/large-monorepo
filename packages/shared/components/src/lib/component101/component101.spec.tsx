import { render } from '@testing-library/react';

import Component101 from './component101';

describe('Component101', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component101 />);
    expect(baseElement).toBeTruthy();
  });
});
