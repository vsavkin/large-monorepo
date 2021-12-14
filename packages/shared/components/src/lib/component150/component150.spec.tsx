import { render } from '@testing-library/react';

import Component150 from './component150';

describe('Component150', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component150 />);
    expect(baseElement).toBeTruthy();
  });
});
