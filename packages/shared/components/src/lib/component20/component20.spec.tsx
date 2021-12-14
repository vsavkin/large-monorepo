import { render } from '@testing-library/react';

import Component20 from './component20';

describe('Component20', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component20 />);
    expect(baseElement).toBeTruthy();
  });
});
