import { render } from '@testing-library/react';

import Component38 from './component38';

describe('Component38', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component38 />);
    expect(baseElement).toBeTruthy();
  });
});
