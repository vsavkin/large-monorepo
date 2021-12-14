import { render } from '@testing-library/react';

import Component53 from './component53';

describe('Component53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component53 />);
    expect(baseElement).toBeTruthy();
  });
});
