import { render } from '@testing-library/react';

import Component62 from './component62';

describe('Component62', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component62 />);
    expect(baseElement).toBeTruthy();
  });
});
