import { render } from '@testing-library/react';

import Component85 from './component85';

describe('Component85', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component85 />);
    expect(baseElement).toBeTruthy();
  });
});
