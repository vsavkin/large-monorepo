import { render } from '@testing-library/react';

import Component50 from './component50';

describe('Component50', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component50 />);
    expect(baseElement).toBeTruthy();
  });
});
