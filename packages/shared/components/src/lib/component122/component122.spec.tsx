import { render } from '@testing-library/react';

import Component122 from './component122';

describe('Component122', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component122 />);
    expect(baseElement).toBeTruthy();
  });
});
