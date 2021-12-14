import { render } from '@testing-library/react';

import Component55 from './component55';

describe('Component55', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component55 />);
    expect(baseElement).toBeTruthy();
  });
});
