import { render } from '@testing-library/react';

import Component195 from './component195';

describe('Component195', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component195 />);
    expect(baseElement).toBeTruthy();
  });
});
