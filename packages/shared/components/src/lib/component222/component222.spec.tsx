import { render } from '@testing-library/react';

import Component222 from './component222';

describe('Component222', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component222 />);
    expect(baseElement).toBeTruthy();
  });
});
