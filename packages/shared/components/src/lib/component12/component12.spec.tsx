import { render } from '@testing-library/react';

import Component12 from './component12';

describe('Component12', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component12 />);
    expect(baseElement).toBeTruthy();
  });
});
