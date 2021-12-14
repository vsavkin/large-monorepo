import { render } from '@testing-library/react';

import Component223 from './component223';

describe('Component223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component223 />);
    expect(baseElement).toBeTruthy();
  });
});
