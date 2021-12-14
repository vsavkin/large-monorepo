import { render } from '@testing-library/react';

import Component141 from './component141';

describe('Component141', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component141 />);
    expect(baseElement).toBeTruthy();
  });
});
