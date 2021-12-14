import { render } from '@testing-library/react';

import Component146 from './component146';

describe('Component146', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component146 />);
    expect(baseElement).toBeTruthy();
  });
});
