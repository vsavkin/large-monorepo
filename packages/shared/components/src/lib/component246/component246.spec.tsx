import { render } from '@testing-library/react';

import Component246 from './component246';

describe('Component246', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component246 />);
    expect(baseElement).toBeTruthy();
  });
});
