import { render } from '@testing-library/react';

import Component110 from './component110';

describe('Component110', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component110 />);
    expect(baseElement).toBeTruthy();
  });
});
