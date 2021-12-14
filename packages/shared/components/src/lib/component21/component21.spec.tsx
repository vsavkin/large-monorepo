import { render } from '@testing-library/react';

import Component21 from './component21';

describe('Component21', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component21 />);
    expect(baseElement).toBeTruthy();
  });
});
