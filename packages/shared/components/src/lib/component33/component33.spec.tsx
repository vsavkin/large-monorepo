import { render } from '@testing-library/react';

import Component33 from './component33';

describe('Component33', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component33 />);
    expect(baseElement).toBeTruthy();
  });
});
