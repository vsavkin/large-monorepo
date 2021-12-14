import { render } from '@testing-library/react';

import Button223 from './button223';

describe('Button223', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Button223 />);
    expect(baseElement).toBeTruthy();
  });
});
