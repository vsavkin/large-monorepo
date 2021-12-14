import { render } from '@testing-library/react';

import Component153 from './component153';

describe('Component153', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component153 />);
    expect(baseElement).toBeTruthy();
  });
});
