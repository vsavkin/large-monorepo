import { render } from '@testing-library/react';

import Component241 from './component241';

describe('Component241', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component241 />);
    expect(baseElement).toBeTruthy();
  });
});
