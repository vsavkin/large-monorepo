import { render } from '@testing-library/react';

import Component80 from './component80';

describe('Component80', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component80 />);
    expect(baseElement).toBeTruthy();
  });
});
