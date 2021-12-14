import { render } from '@testing-library/react';

import Component180 from './component180';

describe('Component180', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component180 />);
    expect(baseElement).toBeTruthy();
  });
});
