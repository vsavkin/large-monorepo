import { render } from '@testing-library/react';

import Component234 from './component234';

describe('Component234', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component234 />);
    expect(baseElement).toBeTruthy();
  });
});
