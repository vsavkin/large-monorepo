import { render } from '@testing-library/react';

import Component67 from './component67';

describe('Component67', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Component67 />);
    expect(baseElement).toBeTruthy();
  });
});
